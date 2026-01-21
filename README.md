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
- 외부에서 관리하는 학생 데이터를 이용하여 카드 목록으로 표시한다.
- 필터를 이용하여 출석, 지각, 결석을 확인할 수 있다.
- 학생의 이름, 반, 상태를 확인할 수 있다.
- 상태를 색으로 구분할 수 있다.
  - 출석: 녹색
  - 지각: 노랑
  - 결석: 빨강

<hr style="height:3px; background:#F2F2F2; border:none;">

## 시험 요구사항 설명

### 외부 서버는 무엇인가?
외부 서버란 학생과 같은 핵심 데이터를 프론트엔드와 분리하여 관리하는 공간을 의미합니다. 본 프로젝트에서는 학생의 이름, 반, 출석 상태 정보를 외부 서버에서 전달받는 데이터로 가정하여 해당 데이터를 이용해 학생 목록을 카드 형태로 화면에 표시합니다. 외부 서버는 자신이 관리하는 학생 출석 데이터 내부 시스템에 제공하는 역할을 담당합니다.

### 어떤 데이터가 연계 데이터인가?
본 프로젝트에서 연계 데이터란 외부 서버에서 관리되며 화면에 표시되는 학생 정보 데이터를 의미합니다. 학생의 학번, 이름, 반, 출석 상태 정보가 서로 연결되어 하나의 학생 데이터로 구성되어 이 데이터를 기반으로 학생 카드 목록이 생성되고 필터 기능이 동작합니다.
