import { todoItemList } from "./modules/todoItemList.js";
import { addTodoModal } from "./modules/modals/addTodoModal.js";
import { getTodos } from "./utils/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const emptyMessage = document.getElementById("emptyMessage");
  const todos = getTodos();

  function updateEmptyMessageVisibility() {
    if (todos.length === 0) {
      emptyMessage.classList.remove("hidden");
    } else {
      emptyMessage.classList.add("hidden");
    }
  }
  updateEmptyMessageVisibility();

  // 처음에 로드할 때 메시지 상태를 업데이트
  if (todos.length === 0) {
    emptyMessage.classList.remove("hidden");
  }

  todos.forEach((todo) => {
    const li = todoItemList(todo);
    todoList.appendChild(li);
  });

  // MutationObserver를 사용해 리스트에 새로운 노드가 추가되었을 때 메시지를 업데이트
  const observer = new MutationObserver(() => {
    updateEmptyMessageVisibility();
  });

  observer.observe(todoList, {
    childList: true, // 자식 노드 추가 및 삭제 감지
  });

  addButton.addEventListener("click", () => {
    addTodoModal(todos, todoList);
  });
});
