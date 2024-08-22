import { projectList } from "./../index";
import displayTasks from "../DomControll/displayTasks.js";

const projectDialog = document.querySelector(".project-dialog");
const taskDialog = document.querySelector(".task-dialog");

const addProjectBtn = document.querySelector(".add-project");
const addTaskBtn = document.querySelector(".addTask");

addProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

addTaskBtn.addEventListener("click", () => {
  taskDialog.showModal();
});

const closeModalBtn = document.querySelectorAll(".closeModalBtn");
closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    projectDialog.close();
    taskDialog.close();
  });
});

taskDialog.addEventListener("submit", (e) => {
  e.preventDefault();
  debugger;
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#dueDate").value;
  const prio = document.querySelector("#prio").value;

  defaultProject.addTask(title, description, dueDate, prio);

  document.querySelector("#task-form").reset();

  taskDialog.close();
});

projectDialog.addEventListener("submit", (e) => {
  e.preventDefault();

  const project = document.querySelector("#projectInput").value;

  if (!projectList.addProject(project)) {
    return;
  }

  const projectListDiv = document.querySelector(".projects");
  const btnContainer = document.createElement("div");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task Here";

  const projectBtn = document.createElement("button");
  projectBtn.classList.add("projectTab");
  projectBtn.id = project;

  addTaskBtn.addEventListener("click", () => {
    event.currentTarget.parentElement.setAttribute("deta-activeProject",true);
    taskDialog.showModal();
  });

  projectBtn.textContent = project;
  projectListDiv.appendChild(btnContainer);
  btnContainer.append(projectBtn, addTaskBtn);

  projectBtn.addEventListener("click", () =>
    displayTasks(projectList[project])
  );
  createTaskDisplayBtn();

  document.querySelector(".project-form").reset();
  projectDialog.close();
});

//add function to the created buttons to display tasks.
function createTaskDisplayBtn() {
  const projectTab = document.querySelector(".projectTab");
  projectTab.addEventListener("click", () =>
    displayTasks(projectList[projectTab.id])
  );
}

export { projectDialog, taskDialog, addProjectBtn, addTaskBtn };
