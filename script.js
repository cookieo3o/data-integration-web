const cardContainer = document.getElementById("cardContainer");

function getStatusClass(status) {
  if (status === "출석") return "green";
  if (status === "지각") return "orange";
  return "red";
}

function renderCards(list) {
  cardContainer.innerHTML = "";

  list.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    const colorClass = getStatusClass(student.status);

    card.innerHTML = `
      <span class=badge>${student.id}</span>
      <h3>이름 : ${student.name}</h3>
      <p>반 : ${student.className}</p>
      <div class="${colorClass}">${student.status}</div>
    `;

    cardContainer.appendChild(card);
  });
}

renderCards(serverStudents);

/* 필터 기능 */
document.querySelectorAll(".filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    // 1️⃣ 모든 버튼 active 제거
    document.querySelectorAll(".filter button").forEach(b => {
      b.classList.remove("active");
    });

    // 2️⃣ 클릭한 버튼에 active 추가
    btn.classList.add("active");

    // 3️⃣ 기존 필터 로직
    const type = btn.dataset.filter;
    if (type === "전체") {
      renderCards(serverStudents);
    } else {
      renderCards(serverStudents.filter(s => s.status === type));
    }
  });
});