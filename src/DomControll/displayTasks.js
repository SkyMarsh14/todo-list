import { differenceInCalendarDays } from "date-fns";

const content = document.querySelector(".content");
const noTasks = document.createElement("div");
noTasks.classList.add("noTasksDiv");
noTasks.textContent = "No tasks in this project :(";

export default function displayTasks(project) {
  content.innerHTML = "";
  if (project.tasks.length === 0) {
    content.appendChild(noTasks);
    return;
  }

  project.tasks.forEach((task) => {
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const prio = document.createElement("div");

    const due = new Date(task.dueDate);
    const today = new Date();
    const daysLeft = differenceInCalendarDays(due, today);

    if(daysLeft ===0 ){
      dueDate.textContent=`Due today!`;
  }else {
    dueDate.textContent = `Due in ${daysLeft} days`;
  }
  
    title.textContent = task.title;
    description.textContent = task.description;
    prio.textContent = task.priority;
    content.append(container);
    container.append(title, description, dueDate, prio);
  });
}
