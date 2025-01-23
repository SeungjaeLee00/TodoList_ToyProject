export function showTodoDetailsModal(todo) {
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

  const details = document.createElement("div");
  details.innerHTML = `
      <h2>${todo.title}</h2>
      <p>${todo.content}</p>
    `;

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(details);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
