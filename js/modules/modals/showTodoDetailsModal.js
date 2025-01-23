import { saveTodos } from "../../utils/localStorage.js";
import { createSubTask } from "../createSubTask.js";

export function showTodoDetailsModal(todo, todos) {
  const modal = document.createElement("div");
  modal.className = "detail-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "detail-modal-content";

  const closeBtn = document.createElement("span");
  closeBtn.className = "detail-close-button";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });

  const titleElement = document.createElement("h2");
  titleElement.textContent = todo.title;

  const details = document.createElement("div");
  details.className = "todo-details";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed || false;

  const label = document.createElement("label");
  label.textContent = todo.content;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;

    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      label.style.color = "gray";
    } else {
      label.style.textDecoration = "none";
      label.style.color = "black";
    }

    saveTodos(todos);
  });

  if (todo.completed) {
    label.style.textDecoration = "line-through";
    label.style.color = "gray";
  }

  details.appendChild(checkbox);
  details.appendChild(label);

  // 하위 메모 섹션
  const subTasksContainer = document.createElement("div");
  subTasksContainer.className = "sub-tasks-container";
  const subTasksList = document.createElement("ul");
  subTasksList.className = "sub-tasks-list";

  if (!todo.subTasks) todo.subTasks = [];
  todo.subTasks.forEach((subTask) => {
    const subTaskItem = createSubTask(subTask, todo, todos);
    subTasksList.appendChild(subTaskItem);
  });

  const subTaskInput = document.createElement("input");
  subTaskInput.type = "text";
  subTaskInput.placeholder = "할 일 추가";

  const addSubTaskBtn = document.createElement("button");
  addSubTaskBtn.textContent = "추가";
  addSubTaskBtn.addEventListener("click", () => {
    const subTaskText = subTaskInput.value.trim();
    if (!subTaskText) {
      alert("하위 항목 내용을 입력하세요.");
      return;
    }
    const newSubTask = { text: subTaskText, completed: false };
    todo.subTasks.push(newSubTask);

    const subTaskItem = createSubTask(newSubTask, todo, todos);
    subTasksList.appendChild(subTaskItem);

    saveTodos(todos);
    subTaskInput.value = "";
  });

  subTasksContainer.appendChild(subTasksList);
  subTasksContainer.appendChild(subTaskInput);
  subTasksContainer.appendChild(addSubTaskBtn);

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(titleElement);
  modalContent.appendChild(details);
  modalContent.appendChild(subTasksContainer);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
