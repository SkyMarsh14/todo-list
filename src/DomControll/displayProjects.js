import { projectList } from "..";
import displayTasks from "./displayTasks";
import editIcon from "../icon/pen-square-svgrepo-com.svg";


export function getCustomProjects() {
  const projects = [];
  Object.keys(projectList).forEach((key) => {
    projects.push(projectList[key]);
  });
  projects.shift();
  return projects;
}

export function displayProject(project) {
    const taskDialog=document.querySelector('.task-dialog');
  const projectListDiv = document.querySelector(".projects");
  const btnContainer = document.createElement("div");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("projectTaskBtn");
  const img = document.createElement("img");
  img.src = editIcon;
  const projectBtn = document.createElement("button");
  projectBtn.classList.add("customProjectBtn");
  btnContainer.classList.add("projectTab");
  btnContainer.id = project;

  //add activeProject attribute to clicked project to associate project with its tasks
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

  projectBtn.textContent = project;
  projectListDiv.appendChild(btnContainer);
  btnContainer.append(projectBtn, addTaskBtn);
  addTaskBtn.append(img);

  projectBtn.addEventListener("click", () =>
    displayTasks(projectList[project])
  );
  const projectTab = document.querySelector(".projectTab");
  projectTab.addEventListener("click", () =>
    displayTasks(projectList[projectTab.id])
  );
}
