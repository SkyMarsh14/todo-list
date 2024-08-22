import { projectList } from "./../index.js";

export default function displayTasks(project) {
  document.querySelector("main").innerHTML = "";
  debugger;

    project.tasks.forEach((task) => {
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const prio = document.createElement("div");

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    prio.textContent = task.priority;
    document.querySelector("main").append(container);
    container.append(title, description, dueDate, prio);
  });
}
