# 데이터 조회 연계 예제 프로젝트
## 프로젝트 개요
외부에서 관리하는 학생의 출석 데이터를 받아 상태를 화면에 표시하고 조회 할 수 있는 예제입니다.
## 파일 구성
<div align="left">
  <div style="display:flex; align-items:center; gap:10px;">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"><br>
    <span>메인 HTML 파일</span><br>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"><br>
    <span>메인 스타일시트</span><br>
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"><br>
    <span>script.js 내부 데이터 처리 자바스크립트</span><br>
     <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"><br>
    <span>server-data.js 외부에서 관리하는 학생 데이터 자바스크립트</span><br>
  </div>
</div>

## 실행 방법
1. 모든 파일을 같은 폴더 안에 저장한다.
2. index.html을 웹 브라우저로 연다.
3. 상단 필터 버튼을 클릭하여 상태별로 학생을 조회한다.

## 주요 기능

나의 말:
업로드한 이미지
const serverStudents = [
    {
        id: "STU-001",
        name: "김철수",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-002",
        name: "이영희",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-003",
        name: "박민수",
        className: "2학년 1반",
        status: "지각"
    },
    {
        id: "STU-004",
        name: "정수진",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-005",
        name: "최동현",
        className: "2학년 1반",
        status: "결석"
    },
    {
        id: "STU-006",
        name: "한지은",
        className: "2학년 1반",
        status: "출석"
    },
    {
        id: "STU-007",
        name: "윤서준",
        className: "1학년 3반",
        status: "지각"
    },
    {
        id: "STU-008",
        name: "강민지",
        className: "2학년 1반",
        status: "출석"
    },
    {
        id: "STU-009",
        name: "송하늘",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-010",
        name: "임도현",
        className: "2학년 1반",
        status: "지각"
    },
    {
        id: "STU-011",
        name: "오지훈",
        className: "1학년 3반",
        status: "결석"
    },
    {
        id: "STU-012",
        name: "류서연",
        className: "2학년 1반",
        status: "출석"
    },
    {
        id: "STU-013",
        name: "배준호",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-014",
        name: "신유나",
        className: "2학년 1반",
        status: "지각"
    },
    {
        id: "STU-015",
        name: "조현우",
        className: "1학년 3반",
        status: "출석"
    },
    {
        id: "STU-016",
        name: "홍서윤",
        className: "2학년 1반",
        status: "결석"
    }
];

자바스크립트 배열을 이용해서 위 이미지처럼 출석관리 프로그램을 만들거야 파일 형식은 HTML, CSS, 자바스크립트 3개로 만들건데 자바스크립트의 배열 내용이 카드에 들어가게 배열 짜줘
ChatGPT의 말:
좋은 예제야 👍
이미 있는 serverStudents를 카드 UI에 바로 쓰기 좋은 형태로 한 번 가공해서 쓰면 딱 좋아.

아래는 카드 렌더링용 배열 구조 예시야.

카드용 배열 예시
const studentCards = serverStudents.map(student => {
  let statusColor = "";
  let buttonText = "";

  switch (student.status) {
    case "출석":
      statusColor = "green";
      buttonText = "출석";
      break;
    case "지각":
      statusColor = "orange";
      buttonText = "지각";
      break;
    case "결석":
      statusColor = "red";
      buttonText = "결석";
      break;
  }

  return {
    id: student.id,
    name: student.name,
    className: student.className,
    status: student.status,
    statusColor,
    buttonText
  };
});
이렇게 쓰기 좋아져
id → 카드 상단 학번

name, className → 카드 정보 영역

statusColor → 상태 배지 색상 (CSS 클래스용)

buttonText → 카드 하단 버튼 텍스트

카드 HTML에서 쓰는 느낌 (개념)
<div class="card green">
  <span>STU-001</span>
  <h3>김철수</h3>
  <p>1학년 3반</p>
  <button>출석</button>
</div>
이제

필터(출석/지각/결석)

상태 변경 버튼

카드 반복 렌더링
다 만들기 아주 편한 구조야 🙂

다음으로 HTML 구조 먼저 짤지, JS로 카드 뿌리는 방법 볼지 말해줘!

나의 말:
둘 다 해줘!
ChatGPT의 말:
좋아 😄
HTML 구조 → JS로 카드 렌더링 순서로 깔끔하게 정리해줄게.

1️⃣ HTML (index.html)
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>출석 관리 프로그램</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>출석 관리 프로그램</h1>

    <div class="filter">
      <button data-filter="전체">전체</button>
      <button data-filter="출석">출석</button>
      <button data-filter="지각">지각</button>
      <button data-filter="결석">결석</button>
    </div>

    <div id="cardContainer" class="card-container"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
2️⃣ CSS (style.css)
body {
  font-family: Arial, sans-serif;
  background: #f4f6f8;
}

.container {
  width: 900px;
  margin: 40px auto;
  text-align: center;
}

.filter button {
  margin: 0 4px 20px;
  padding: 6px 14px;
  cursor: pointer;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.card {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  text-align: left;
}

.badge {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
}

.green { background: #4caf50; }
.orange { background: #ff9800; }
.red { background: #f44336; }

.card button {
  margin-top: 10px;
  width: 100%;
  padding: 6px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
3️⃣ JavaScript (script.js)
const serverStudents = [
  { id: "STU-001", name: "김철수", className: "1학년 3반", status: "출석" },
  { id: "STU-002", name: "이영희", className: "1학년 3반", status: "출석" },
  { id: "STU-003", name: "박민수", className: "2학년 1반", status: "지각" },
  { id: "STU-004", name: "정수진", className: "1학년 3반", status: "출석" },
  { id: "STU-005", name: "최동현", className: "2학년 1반", status: "결석" },
  { id: "STU-006", name: "한지은", className: "2학년 1반", status: "출석" }
];

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
      <span class="badge ${colorClass}">${student.id}</span>
      <h3>${student.name}</h3>
      <p>${student.className}</p>
      <button class="${colorClass}">${student.status}</button>
    `;

    cardContainer.appendChild(card);
  });
}

renderCards(serverStudents);

/* 필터 기능 */
document.querySelectorAll(".filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    if (type === "전체") {
      renderCards(serverStudents);
    } else {
      renderCards(serverStudents.filter(s => s.status === type));
    }
  });
});
✅ 지금 상태
배열 → 카드 자동 생성 ✔

상태별 색상 ✔

출석/지각/결석 필터 ✔

이미지와 거의 같은 구조 ✔

다음으로는
👉 카드 버튼 클릭해서 상태 바꾸기
👉 CSS 더 예쁘게 다듬기
중에 뭐 해볼까?

나의 말:
배열 부분 자바스크립트를 javascript.js가 아니라 server-data.js로 따로 쓰고 싶을 때는 어떻게 해야해?
ChatGPT의 말:
아주 좋은 질문이야 👍
이건 프론트엔드에서 데이터 분리하는 기본 패턴이라 꼭 알아두면 좋아.

✅ 핵심 개념
👉 server-data.js에서 배열을 전역 변수로 선언
👉 HTML에서 script 순서만 지켜서 불러오기

1️⃣ server-data.js (데이터 전용 파일)
const serverStudents = [
  { id: "STU-001", name: "김철수", className: "1학년 3반", status: "출석" },
  { id: "STU-002", name: "이영희", className: "1학년 3반", status: "출석" },
  { id: "STU-003", name: "박민수", className: "2학년 1반", status: "지각" },
  { id: "STU-004", name: "정수진", className: "1학년 3반", status: "출석" }
];
👉 export 안 씀 (순수 JS 방식)

2️⃣ script.js (로직 파일)
const cardContainer = document.getElementById("cardContainer");

function renderCards(list) {
  cardContainer.innerHTML = "";

  list.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <span>${student.id}</span>
      <h3>${student.name}</h3>
      <p>${student.className}</p>
      <button>${student.status}</button>
    `;

    cardContainer.appendChild(card);
  });
}

renderCards(serverStudents);
✔ serverStudents를 그냥 사용할 수 있음

3️⃣ HTML에서 script 순서 ⭐⭐⭐
<script src="server-data.js"></script>
<script src="script.js"></script>
⚠️ 데이터 파일이 반드시 먼저!

브라우저는 위에서 아래로 JS를 실행함
→ script.js가 실행될 때 serverStudents가 이미 있어야 함

❌ 자주 하는 실수
<script src="script.js"></script>
<script src="server-data.js"></script>
👉 이러면 serverStudents is not defined 에러 발생

💡 언제 이 방식이 좋을까?
아직 모듈(import/export) 안 배웠을 때

간단한 프로젝트

서버 흉내내는 더미 데이터 분리할 때

🔥 다음 단계 힌트
나중에 배우게 될 건:

type="module" + export / import

실제 API (fetch)로 서버 데이터 받기

원하면 module 방식으로 바꾸는 예제도 바로 보여줄게 😊

나의 말:
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

    card.innerHTML = 
      <span class="badge ${colorClass}">${student.id}</span>
      <h3>${student.name}</h3>
      <p>${student.className}</p>
      <button class="${colorClass}">${student.status}</button>
    ;

    cardContainer.appendChild(card);
  });
}

renderCards(serverStudents);

/* 필터 기능 */
document.querySelectorAll(".filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    if (type === "전체") {
      renderCards(serverStudents);
    } else {
      renderCards(serverStudents.filter(s => s.status === type));
    }
  });
});


자바스크립트 분리해서 이렇게 적었는데 컨테이너 안에 아예 카드 내용이 안 나와
ChatGPT의 말:
이 상황이면 원인 거의 100% 정해져 있어 👍
차근차근 체크해보자.

✅ 1️⃣ 가장 흔한 원인: script 실행 시점 문제
cardContainer가 아직 DOM에 없는데 JS가 먼저 실행되면
→ null 상태라 카드가 안 만들어져.

🔴 증상
에러는 없는데

화면에 아무것도 안 나옴

✅ 해결 방법 ① (가장 추천)
script.js를 body 맨 아래에 두기
<body>
  ...
  <div id="cardContainer"></div>

  <script src="server-data.js"></script>
  <script src="script.js"></script>
</body>
✔ 이미 이렇게 되어 있다면 다음으로!

✅ 해결 방법 ② (JS에서 DOM 로드 기다리기)
document.addEventListener("DOMContentLoaded", () => {
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
        <span class="badge ${colorClass}">${student.id}</span>
        <h3>${student.name}</h3>
        <p>${student.className}</p>
        <button class="${colorClass}">${student.status}</button>
      `;

      cardContainer.appendChild(card);
    });
  }

  renderCards(serverStudents);

  document.querySelectorAll(".filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.filter;
      renderCards(
        type === "전체"
          ? serverStudents
          : serverStudents.filter(s => s.status === type)
      );
    });
  });
});
✅ 2️⃣ 두 번째로 많이 터지는 원인: script 순서
HTML에서 이 순서 맞는지 꼭 확인

<script src="server-data.js"></script>
<script src="script.js"></script>
❌ 바뀌면 serverStudents 못 읽음

✅ 3️⃣ 콘솔에서 꼭 확인해볼 것
개발자도구(Console)에 아래 중 하나 뜰 거야👇

Cannot read properties of null (reading 'innerHTML')

serverStudents is not defined

👉 뜨는 메시지 알려주면 바로 정확히 짚어줄 수 있어

🎯 정리
카드 안 나올 때 공식 체크리스트:

cardContainer 존재하나?

JS가 DOM보다 먼저 실행되진 않았나?

server-data.js가 먼저 로드됐나?

지금 상태면 1번 or 2번일 확률이 가장 높아.
HTML 코드도 올려주면 바로 잡아줄게 😊

나의 말:
궁금한게 위에 탭 버튼 클릭했을 때 active 줘서 활성 상태인 걸 보여주고 싶은데 자바스크립트 어디에 넣어야 할까?

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

    card.innerHTML = 
      <span class="badge ${colorClass}">${student.id}</span>
      <h3>이름 : ${student.name}</h3>
      <p>반 : ${student.className}</p>
      <div class="${colorClass}">${student.status}</div>
    ;

    cardContainer.appendChild(card);
  });
}

renderCards(serverStudents);

/* 필터 기능 */
document.querySelectorAll(".filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    if (type === "전체") {
      renderCards(serverStudents);
    } else {
      renderCards(serverStudents.filter(s => s.status === type));
    }
  });
});
ChatGPT의 말:
와 이 타이밍에 이 질문 나오는 거면 흐름 완전 잘 잡고 있어 👍
active 처리 위치도 딱 여기 맞아.

✅ 정답부터
👉 지금 있는 필터 버튼 click 이벤트 안에 넣으면 돼

“필터 클릭” + “활성 버튼 표시”는 같은 행동이니까
같은 이벤트에서 처리하는 게 가장 깔끔해.

1️⃣ JS에서 넣어야 할 위치
🔽 여기 안이야
document.querySelectorAll(".filter button").forEach(btn => {
  btn.addEventListener("click", () => {
    // ✅ 여기!
  });
});
2️⃣ active 처리 로직 (추가 코드)
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
👉 순서도 중요

active 정리

active 추가

카드 필터링

3️⃣ CSS에서 active 스타일 예시
.filter button.active {
  background: #4a6cf7;
  color: white;
  font-weight: bold;
}
4️⃣ 처음 로딩 시 “전체” 활성화하고 싶다면
HTML에서 한 번만 주는 게 가장 깔끔해 👇

<button data-filter="전체" class="active">전체</button>
🎯 개념 정리 (중요)
UI 상태(active) → 버튼 클릭 이벤트에서 관리

데이터 상태(필터링) → 같은 이벤트에서 처리

따로 분리하면 오히려 헷갈림 ❌

지금 구조는 실무에서도 그대로 쓰는 패턴이야 👍
다음으로는
👉 버튼 누르면 출석/지각/결석 토글
👉 카드 클릭 시 상세 보기
중에 뭐 해볼까?

나의 말:
지금 README.md 파일 만들고 있는데 왜 이미지랑 텍스트가 정렬이 안 될까?

<div style="text-align: left;">
    <div style="margin: ; text-align: left; text-align: left; display: flex; justifiy-content: center;">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
        메인 HTML 파일
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
        <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
    </div>
</div>
ChatGPT의 말:
이거 README.md + GitHub 렌더링 특성 + CSS 오타가 겹쳐서 그래 😊
원인부터 딱 짚어줄게.

❌ 핵심 원인 3가지
1️⃣ justifiy-content 오타 ❌
justifiy-content: center;
➡️ 정답

justify-content: center;
오타 때문에 flex 정렬이 아예 적용 안 됨

2️⃣ README.md에서는 일부 CSS가 무시됨
GitHub README는:

<style> ❌

일부 inline CSS만 ✔

margin: 값이 없으면 ❌

margin: ;
➡️ 이것도 무효 속성이야

3️⃣ 텍스트는 inline, 이미지는 inline-block
이미지랑 텍스트를 그냥 섞어 쓰면
수직 정렬이 어긋나는 게 정상이야

✅ 가장 안정적인 해결 방법 (README에서 제일 잘 먹힘)
✔ 방법 1: flex + span으로 감싸기
<div align="left">
  <div style="display:flex; align-items:center; gap:8px;">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
    <span>메인 HTML 파일</span>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
  </div>
</div>
👉 align-items: center가 세로 정렬 핵심

✅ 더 README다운 방법 (추천 ⭐)
✔ 방법 2: table 사용 (GitHub 최강)
<table>
  <tr>
    <td>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
    </td>
    <td>메인 HTML 파일</td>
    <td>
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
    </td>
  </tr>
</table>
✔ GitHub에서 100% 동일하게 보임
✔ 실무 README에서 제일 많이 씀

🎯 정리
문제	이유
정렬 안 됨	CSS 오타
flex 안 먹힘	GitHub CSS 제한
이미지/텍스트 어긋남	baseline 차이
지금 README 작성 방향도 되게 좋아 👍
원하면 기술 스택 뱃지 정렬 예쁘게 만드는 패턴도 같이 정리해줄까?

나의 말:
ㆍ외부에서 관리하는 학생 데이터를 이용하여 카드 목록으로 표시한다.
ㆍ필터를 이용하여 출석, 지각, 결석을 확인할 수 있다.
ㆍ학생의 이름, 반, 상태를 확인 할 수 있다.
ㆍ상태를 색으로 구분 할 수 있다.
  → 출석: 녹색 ㆍ 지각: 노랑 ㆍ 결석: 빨강

리드미에서 이렇게 했는데 줄바꿈이 안 되고 한 줄로 나와 이런 형식으로 쓰고 싶을 때는 어떻게 해야해?
ChatGPT의 말:
이거 README에서 아주 흔하게 겪는 포인트야 😊
원인은 간단해.

❌ 왜 한 줄로 나올까?
지금처럼 쓰면 GitHub Markdown에서는
가운데 점(ㆍ) 이 그냥 일반 문자라서
→ 줄바꿈으로 인식되지 않음

Markdown은 엔터 = 줄바꿈이 아님 ❌

✅ 해결 방법 1️⃣ (가장 정석 ⭐)
👉 리스트 문법 사용하기
- 외부에서 관리하는 학생 데이터를 이용하여 카드 목록으로 표시한다.
- 필터를 이용하여 출석, 지각, 결석을 확인할 수 있다.
- 학생의 이름, 반, 상태를 확인할 수 있다.
- 상태를 색으로 구분할 수 있다.
  - 출석: 녹색
  - 지각: 노랑
  - 결석: 빨강



    

