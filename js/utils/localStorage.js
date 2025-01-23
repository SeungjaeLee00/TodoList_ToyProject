export function getTodos() {
  try {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos || storedTodos === "undefined") {
      return [];
    }
    return JSON.parse(storedTodos);
  } catch (error) {
    console.error("파싱 실패:", error);
    return [];
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("로컬스토리지에 저장 실패:", error);
  }
}
