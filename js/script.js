document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo) => {
    const li = createTodoItem(todo);
    todoList.appendChild(li);
  });

  addButton.addEventListener("click", () => {
    openAddTodoModal();
  });

  addButton.addEventListener("click", () => {
    openAddTodoModal();
  });

  function openAddTodoModal() {
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
          title: title,
          content: content,
          id: Date.now(),
          completed: false,
        };
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));

        const li = createTodoItem(newTodo);
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

  function createTodoItem(todo) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checklists";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", (e) => {
      todo.completed = e.target.checked;
      li.classList.toggle("completed", e.target.checked);
      localStorage.setItem("todos", JSON.stringify(todos));
    });

    const label = document.createElement("label");
    label.textContent = todo.content;

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "상세 보기";
    detailsButton.addEventListener("click", () => {
      showTodoDetails(todo);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(detailsButton);

    li.className = "todo-item";

    return li;
  }

  const checkboxes = document.getElementsByName("checklists");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const li = e.target.parentNode;
      const index = Array.from(checkboxes).indexOf(e.target);
      todos[index].completed = e.target.checked;
      li.classList.toggle("completed", e.target.checked);
      localStorage.setItem("todos", JSON.stringify(todos));
    });
  });

  function showTodoDetails(todo) {
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

    const title = document.createElement("h2");
    title.textContent = todo.title;

    const content = document.createElement("p");
    content.textContent = todo.content;

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(content);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
  }
});
