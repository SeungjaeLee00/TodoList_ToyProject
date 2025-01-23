import { saveTodos } from "../../utils/localStorage.js";
import { todoItemList } from "../todoItemList.js";

export function addTodoModal(todos, todoList) {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-button";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "제목:";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "todoTitle";

  const contentLabel = document.createElement("label");
  contentLabel.textContent = "내용:";

  const contentInput = document.createElement("textarea");
  contentInput.name = "todoContent";

  const addButton = document.createElement("button");
  addButton.textContent = "추가하기";
  addButton.addEventListener("click", () => {
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
      const newTodo = {
        title,
        content,
        id: Date.now(),
        completed: false,
      };
      todos.push(newTodo);
      saveTodos(todos);

      const li = todoItemList(newTodo);
      todoList.appendChild(li);

      modal.remove();
    } else {
      alert("제목과 내용을 입력하세요.");
    }
  });

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(titleLabel);
  modalContent.appendChild(titleInput);
  modalContent.appendChild(contentLabel);
  modalContent.appendChild(contentInput);
  modalContent.appendChild(addButton);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
