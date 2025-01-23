import { saveTodos } from "../utils/localStorage.js";

export function deleteTodo(id, todos, li) {
  if (!todos) {
    console.log("todos 배열이 정의되지 않았습니다.");
    return;
  }

  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    li.remove();
    saveTodos(todos);
  } else {
    console.log(`리스트에서 데이터 ID ${id}를 찾을 수 없습니다.`);
  }
}
