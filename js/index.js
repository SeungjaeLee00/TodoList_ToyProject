import { deleteTodo } from "./modules/deleteTodo.js";
import { todoItemList } from "./modules/todoItemList.js";
import { addTodoModal } from "./modules/modals/addTodoModal.js";
import { getTodos } from "./utils/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const todos = getTodos();

  todos.forEach((todo) => {
    const li = todoItemList(todo);
    todoList.appendChild(li);
  });

  addButton.addEventListener("click", () => {
    addTodoModal(todos, todoList);
  });

  todoList.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".delete-button")) {
      const li = e.target.closest("li");
      const todoId = parseInt(li.dataset.id, 10);

      const confirmDelete = window.confirm("삭제하시겠습니까?");
      if (confirmDelete) {
        deleteTodo(todoId, todos, todoList);
        alert("삭제되었습니다.");
      }
    }
  });
});
