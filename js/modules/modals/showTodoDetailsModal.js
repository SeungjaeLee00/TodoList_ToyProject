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

  const details = document.createElement("div");
  details.innerHTML = `
      <h2>${todo.title}</h2>
      <p>${todo.content}</p>
    `;

  // 하위 메모 섹션
  const subTasksContainer = document.createElement("div");
  subTasksContainer.className = "sub-tasks-container";
  const subTasksList = document.createElement("ul");
  subTasksList.className = "sub-tasks-list";

  // 기존 하위 항목 렌더링
  if (!todo.subTasks) todo.subTasks = [];
  todo.subTasks.forEach((subTask) => {
    const subTaskItem = createSubTask(subTask, todo, todos);
    subTasksList.appendChild(subTaskItem);
  });
  // 입력 및 추가 버튼
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

    // 로컬 스토리지에 저장
    saveTodos(todos);

    subTaskInput.value = "";
  });

  subTasksContainer.appendChild(subTasksList);
  subTasksContainer.appendChild(subTaskInput);
  subTasksContainer.appendChild(addSubTaskBtn);

  // 모달 구성
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(details);
  modalContent.appendChild(subTasksContainer);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
