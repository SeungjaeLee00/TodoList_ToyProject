// document.addEventListener("DOMContentLoaded", () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const todoId = urlParams.get("id");
//   const todos = JSON.parse(localStorage.getItem("todos")) || [];
//   const todo = todos.find((t) => t.id === Number(todoId));

//   if (!todo) {
//     alert("할 일이 없습니다!");
//     window.location.href = "/html/index.html";
//     return;
//   }

//   const todoTitle = document.getElementById("todoTitle");
//   const deleteButton = document.getElementById("deleteTodo");

//   todoTitle.textContent = todo.title;

//   deleteButton.addEventListener("click", () => {
//     const updatedTodos = todos.filter((t) => t.id !== Number(todoId));
//     localStorage.setItem("todos", JSON.stringify(updatedTodos));
//     alert("할 일을 삭제했습니다!");
//     window.location.href = "/html/index.html";
//   });
// });
