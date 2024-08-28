import { projectList } from "./../index";
import displayTasks from "../DomControll/displayTasks.js";
import displayProject from "./displayProjects.js"

const projectDialog = document.querySelector(".project-dialog");
const taskDialog = document.querySelector(".task-dialog");

const addProjectBtn = document.querySelector(".add-project");
const addTaskBtn = document.querySelector(".addTask");

addProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

addTaskBtn.addEventListener("click", () => {
  const selectedProject = document.querySelector(
    '[data-active-project="true"]'
  );
  if (selectedProject) {
    selectedProject.dataset.activeProject = false;
  }
  event.currentTarget.parentElement.setAttribute("data-active-project", true);
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
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#dueDate").value;
  const prio = document.querySelector('input[name="priority"]:checked').value;
  const selectedProject = document.querySelector(
    '[data-active-project="true"]'
  );
  if (!selectedProject) {
    projectList.inboxProject.addTask(title, description, dueDate, prio);
  } else {
    projectList[selectedProject.id].addTask(title, description, dueDate, prio);
  }

  document.querySelector("#task-form").reset();

  taskDialog.close();
  displayTasks(projectList[selectedProject.id]);
});

projectDialog.addEventListener("submit", (e) => {
  e.preventDefault();

  const project = document.querySelector("#projectInput").value;
  
  //check project will not duplicate
  if (!projectList.addProject(project)) {
    return;
  }
  displayProject(project);
  
  document.querySelector(".project-form").reset();
  projectDialog.close();
  displayTasks(projectList[project]);
});


export {
  projectDialog,
  taskDialog,
  addProjectBtn,
  addTaskBtn
};