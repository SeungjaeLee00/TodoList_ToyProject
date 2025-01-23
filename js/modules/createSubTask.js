import { saveTodos } from "../utils/localStorage.js";

export function createSubTask(subTask, todos) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = subTask.completed;

  const text = document.createElement("span");
  text.textContent = subTask.text;

  checkbox.addEventListener("change", () => {
    subTask.completed = checkbox.checked;

    if (subTask.completed) li.classList.add("completed");
    else li.classList.remove("completed");

    saveTodos(todos);
  });

  if (subTask.completed) {
    li.classList.add("completed");
  }

  li.appendChild(checkbox);
  li.appendChild(text);

  return li;
}
