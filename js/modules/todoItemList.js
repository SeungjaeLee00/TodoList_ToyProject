import { saveTodos } from "../utils/localStorage.js";
import { showTodoDetailsModal } from "./modals/showTodoDetailsModal.js";

export function todoItemList(todo, todos) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checklists";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", (e) => {
    todo.completed = e.target.checked;
    li.classList.toggle("completed", e.target.checked);
    saveTodos(todos);
  });

  const label = document.createElement("label");
  label.textContent = todo.title;

  const detailsButton = document.createElement("button");
  detailsButton.className = "detail-button";
  detailsButton.textContent = "상세 보기";
  detailsButton.addEventListener("click", () => {
    showTodoDetailsModal(todo, todos);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "삭제";

  const createdAt = document.createElement("span");
  createdAt.className = "created-at";
  // console.log(todo.createdAt);

  createdAt.textContent = new Date(todo.createdAt).toLocaleString();

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(detailsButton);
  li.appendChild(deleteButton);
  li.appendChild(createdAt);

  li.className = "todo-item";

  return li;
}
