export function deleteTodo(todoId, todos, todoList) {
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index > -1) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));

    // 화면에서 삭제
    const todoItem = todoList.querySelector(`[data-id="${todoId}"]`);
    if (todoItem) {
      todoItem.remove();
    }
  }
}
