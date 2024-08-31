import { differenceInCalendarDays } from "date-fns";
import trashcanSvg from "../icon/trashcan.svg";
import { saveLocal } from "../localStorage";


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

  project.tasks.forEach((task, index) => {
    const container = document.createElement("div");
    container.classList.add("task");
    container.dataset.taskIndex=index;
    const title = document.createElement("h2");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const deleteTaskBtn=document.createElement('button');
    const trashcanImg=document.createElement('img');
    trashcanImg.src=trashcanSvg;
    const due = new Date(task.dueDate);
    const today = new Date();
    const daysLeft = differenceInCalendarDays(due, today);
    if (daysLeft === 0) {
      dueDate.textContent = `Due today!`;
    } else if (isNaN(daysLeft)) {
      dueDate.textContent = `Due Date Not Set.`;
    } else {
      dueDate.textContent = `Due in ${daysLeft} days`;
    }
    deleteTaskBtn.addEventListener("click",()=>{
      container.remove();
      project.tasks.splice(`${index}`,1);
      saveLocal();
    })
    //Add dataset for prio to style container according to the priority given.
    container.dataset.priority = task.priority;

    title.textContent = task.title;
    description.textContent = task.description
      ? `Description: ${task.description}`
      : null;
    content.append(container);
    container.append(title, description, dueDate,deleteTaskBtn);
    deleteTaskBtn.append(trashcanImg);
  });
}
