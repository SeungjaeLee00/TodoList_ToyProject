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

  const createdAt = document.createElement("span");
  createdAt.className = "created-at";
  // console.log(todo.createdAt);
  createdAt.textContent = new Date(todo.createdAt).toLocaleString();

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";

  const trashIcon = document.createElement("img");
  trashIcon.src = "/assets/trashcan.png";
  trashIcon.alt = "삭제 아이콘";

  deleteButton.appendChild(trashIcon);

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(detailsButton);
  li.appendChild(createdAt);
  li.appendChild(deleteButton);

  li.className = "todo-item";

  return li;
}
