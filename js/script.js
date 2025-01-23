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
      const newTodo = { content: todoTitle, id: Date.now() };
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));

      const li = createTodoItem(newTodo);
      todoList.appendChild(li);
    }
  });

  function createTodoItem(todo) {
    const li = document.createElement("li");
    li.textContent = todo.content;
    li.className = "todo-item";
    return li;
  }
});
