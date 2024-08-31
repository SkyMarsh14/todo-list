import { projectList } from "..";
import displayTasks from "./displayTasks";
import editSvg from "../icon/pen-square-svgrepo-com.svg";
import trashcanSvg from "../icon/trashcan.svg";
import { loadLocalProject } from "../localStorage";

export function getCustomProjects() {
  const projects = [];
  Object.assign(projectList, loadLocalProject());
  Object.keys(projectList).forEach((key) => {
    projects.push(projectList[key]);
  });
  projects.shift();
  return projects;
}

export function displayProject(project) {
  const taskDialog = document.querySelector(".task-dialog");
  const projectListDiv = document.querySelector(".projects");
  const btnContainer = document.createElement("div");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("projectTaskBtn");
  const noteIcon = document.createElement("img");
  const deleteProjectBtn = document.createElement("button");
  const trashcanIcon = document.createElement("img");
  deleteProjectBtn.classList.add("deleteProjectBtn");
  trashcanIcon.src = trashcanSvg;
  noteIcon.src = editSvg;
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("customProjectBtn");
  btnContainer.classList.add("projectTab");
  btnContainer.id = project;

  //add activeProject attribute to clicked project to associate project with its tasks
  addTaskBtn.addEventListener("click", () => {
    const selectedProject = document.querySelector(
      '[data-active-project="true"]',
    );
    if (selectedProject) {
      selectedProject.dataset.activeProject = false;
    }
    event.currentTarget.parentElement.setAttribute("data-active-project", true);
    taskDialog.showModal();
  });

  projectBtn.textContent = project;
  projectListDiv.appendChild(btnContainer);
  btnContainer.append(projectBtn, addTaskBtn, deleteProjectBtn);
  addTaskBtn.append(noteIcon);
  deleteProjectBtn.append(trashcanIcon);

  projectBtn.addEventListener("click", () => {
    displayTasks(projectList[project]);
  });

  deleteProjectBtn.addEventListener("click", () => {
    projectList.removeProject(project);
    btnContainer.remove();
  });
}
