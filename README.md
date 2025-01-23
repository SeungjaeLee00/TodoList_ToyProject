# Todo List Toy Project

HTML, CSS, JavaScript로 구현된 간단한 Todo List 애플리케이션입니다. 브라우저의 Local Storage를 이용하여 데이터를 유지합니다.

---

## 기능 설명

- **새로운 Todo 추가**: "Add Todo" 버튼을 클릭하여 새로운 Todo를 쉽게 추가할 수 있습니다.
- **Todo 상세보기**: Todo 제목을 클릭하면 상세 페이지로 이동하여 내용을 확인할 수 있습니다.
- **Todo 삭제**: 상세 페이지에서 Todo를 삭제할 수 있습니다.
- **데이터 유지**: Local Storage를 사용하여 브라우저를 새로고침하거나 종료해도 데이터가 유지됩니다.

---

## 폴더 구조

### 프로젝트 루트

- `index.html`: 메인 HTML 파일로, 단일 페이지 애플리케이션의 진입점입니다.

### /css

- `addTodoModal.css`: '할 일 추가' 모달 창의 스타일을 정의한 CSS 파일입니다.
- `showTodoDetailsModal.css`: '할 일 상세보기' 모달 창의 스타일을 정의한 CSS 파일입니다.
- `styles.css`: 프로젝트 전반에서 사용되는 공통 스타일 시트입니다.
- `todoItemList.css`: 할 일 리스트의 스타일을 정의한 CSS 파일입니다.

### /js

#### /utils

- `localStorage.js`: 로컬 스토리지 관리와 관련된 유틸리티 함수가 포함된 파일입니다.

#### /modals

- `addTodoModal.js`: '할 일 추가' 모달 창의 로직을 처리하는 JavaScript 파일입니다.
- `showTodoDetailsModal.js`: '할 일 상세보기' 모달 창의 로직을 처리하는 JavaScript 파일입니다.

#### 기타

- `createSubTask.js`: 하위 작업 추가 기능의 로직을 담당하는 JavaScript 파일입니다.
- `deleteTodo.js`: '할 일 삭제' 기능의 로직을 처리하는 JavaScript 파일입니다.
- `todoItemList.js`: 할 일 리스트 생성 및 관리를 담당하는 JavaScript 파일입니다.

### /assets

- `todo.ico`: 할 일 애플리케이션에서 사용되는 아이콘 파일입니다.
- `trashcan.png`: 휴지통 아이콘 이미지 파일입니다.

---

## 기술 스택

- HTML
- CSS
- JavaScript

---

## 실행 방법

1. **Node.js 설치**

   - [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치합니다.

2. **http-server 설치**

   - 터미널(명령 프롬프트)을 열고 아래 명령어를 입력하여 `http-server`를 설치합니다.
     ```bash
     npm install -g http-server
     ```

3. **프로젝트 폴더로 이동**

   - 터미널에서 Todo List 프로젝트가 있는 폴더로 이동합니다.
     ```bash
     cd [프로젝트 폴더 경로]
     ```

4. **로컬 서버 실행**

   - 아래 명령어를 입력하여 서버를 실행합니다.
     ```bash
     http-server -p 3002
     ```
   - 서버가 실행되면 브라우저에서 아래 URL을 엽니다.
     ```
     http://localhost:3002/html/index.html
     ```

5. **Todo 관리**
   - "Add Todo" 버튼을 클릭하여 새로운 Todo를 추가하고, Todo 제목을 클릭하여 상세 페이지를 확인하거나 삭제할 수 있습니다.
