import { todoItemList } from "./modules/todoItemList.js";
import { addTodoModal } from "./modules/modals/addTodoModal.js";
import { getTodos } from "./utils/localStorage.js";
import { deleteAllTodos } from "./modules/deleteTodo.js";

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const emptyMessage = document.getElementById("emptyMessage");
  const deleteAllButton = document.getElementById("delete-all-btn");
  const todos = getTodos();

  function updateEmptyMessageVisibility() {
    if (todos.length === 0) {
      emptyMessage.classList.remove("hidden");
    } else {
      emptyMessage.classList.add("hidden");
    }
  }

  function renderTodos() {
    todoList.innerHTML = ""; // 기존 리스트 초기화
    todos.forEach((todo) => {
      const li = todoItemList(todo);
      todoList.appendChild(li);
    });
    updateEmptyMessageVisibility();
  }

  // 초기 로드 시 렌더링
  updateEmptyMessageVisibility();
  renderTodos();

  // MutationObserver로 리스트에 새로운 노드가 추가되었을 때 메시지를 업데이트
  const observer = new MutationObserver(() => {
    updateEmptyMessageVisibility();
  });

  observer.observe(todoList, {
    childList: true, // 자식 노드 추가 및 삭제 감지
  });

  addButton.addEventListener("click", () => {
    addTodoModal(todos, todoList);
  });

  // 전체 삭제 버튼 이벤트 리스너 추가
  deleteAllButton.addEventListener("click", () => {
    deleteAllTodos(todos, renderTodos);
  });
});
