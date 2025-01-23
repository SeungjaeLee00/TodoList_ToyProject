# Todo List Toy Project

HTML, CSS, JavaScript로 구현된 간단한 Todo List 애플리케이션입니다. 브라우저의 Local Storage를 이용하여 데이터를 유지합니다.

---

## 기능 설명

- **새로운 Todo 추가**: "Add Todo" 버튼을 클릭하여 새로운 Todo를 쉽게 추가할 수 있습니다.
- **데이터 유지**: Local Storage를 사용하여 브라우저를 새로고침하거나 종료해도 데이터가 유지됩니다.

---

## 폴더 구조

- **/css**  
  애플리케이션의 스타일 파일들이 포함되어 있습니다.

- **/html**

  - `index.html`: Todo 목록 페이지

- **/js**

  - `script.js`: Todo 목록 페이지의 JavaScript

- **README.md**  
  프로젝트 설명 파일입니다.

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
   - "Add Todo" 버튼을 클릭하여 새로운 Todo를 추가할 수 있습니다.
