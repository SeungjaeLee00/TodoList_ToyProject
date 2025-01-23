document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoList = document.getElementById("todoList");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo) => {
    const li = createTodoItem(todo);
    todoList.appendChild(li);
  });

  addButton.addEventListener("click", () => {
    const todoTitle = prompt("할 일을 입력하세요.");
    if (todoTitle) {
      const newTodo = { content: todoTitle, id: Date.now(), completed: false };
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));

      const li = createTodoItem(newTodo);
      todoList.appendChild(li);
    }
  });

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

    li.appendChild(checkbox);
    li.appendChild(label);
    li.className = "todo-item";

    // li.addEventListener("click", () => {
    //   window.location.href = `/html/todo.html?id=${todo.id}`;
    // });

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
});
