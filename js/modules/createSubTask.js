import { saveTodos } from "../utils/localStorage.js";

export function createSubTask(subTask, todo, todos) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = subTask.completed;
  checkbox.addEventListener("change", () => {
    subTask.completed = checkbox.checked;

    saveTodos(todos);
  });

  const text = document.createElement("span");
  text.textContent = subTask.text;

  li.appendChild(checkbox);
  li.appendChild(text);

  return li;
}
