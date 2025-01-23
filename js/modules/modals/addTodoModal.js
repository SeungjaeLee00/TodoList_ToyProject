import { saveTodos } from "../../utils/localStorage.js";
import { todoItemList } from "../todoItemList.js";

export function addTodoModal(todos, todoList) {
  const modal = document.createElement("div");
  modal.className = "add-modal";

  const modalContent = document.createElement("div");
  modalContent.className = "add-modal-content";

  const closeBtn = document.createElement("span");
  closeBtn.className = "add-close-button";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => modal.remove());

  const titleLabel = document.createElement("label");
  titleLabel.className = "add-titie";
  titleLabel.textContent = "제목";
  const titleInput = document.createElement("input");
  titleInput.className = "titleInput";
  titleInput.type = "text";
  titleInput.name = "todoTitle";

  const contentLabel = document.createElement("label");
  contentLabel.className = "add-content";
  contentLabel.textContent = "내용";
  const contentInput = document.createElement("textarea");
  contentInput.className = "contentInput";
  contentInput.name = "todoContent";

  const addButton = document.createElement("button");
  addButton.className = "add-btn";
  addButton.textContent = "추가하기";
  addButton.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      content,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);
    saveTodos(todos);

    const li = todoItemList(newTodo, todos);
    todoList.appendChild(li);

    modal.remove();
  });

  modalContent.append(
    closeBtn,
    titleLabel,
    titleInput,
    contentLabel,
    contentInput,
    addButton
  );
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
