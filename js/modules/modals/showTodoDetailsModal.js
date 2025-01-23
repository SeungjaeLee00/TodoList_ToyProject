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

  // 체크박스와 라벨을 분리해서 디테일에 넣
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

  // details 구성 요소 분리
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "todo-details";

  detailsContainer.appendChild(checkbox);
  detailsContainer.appendChild(label);

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

  const subTaskInputContainer = document.createElement("div");
  subTaskInputContainer.className = "sub-task-input-container";

  const subTaskInput = document.createElement("input");
  subTaskInput.className = "sub-task-input";
  subTaskInput.type = "text";
  subTaskInput.placeholder = "할 일 추가";

  const addSubTaskBtn = document.createElement("button");
  addSubTaskBtn.textContent = "+";
  addSubTaskBtn.className = "add-sub-task-btn";
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

  subTaskInputContainer.appendChild(subTaskInput);
  subTaskInputContainer.appendChild(addSubTaskBtn);

  subTasksContainer.appendChild(subTasksList);
  subTasksContainer.appendChild(subTaskInputContainer);

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(titleElement);
  modalContent.appendChild(detailsContainer);
  modalContent.appendChild(subTasksContainer);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
