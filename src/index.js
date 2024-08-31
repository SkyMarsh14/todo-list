import "./styles.css";
import { Project, ProjectList } from "./projectManager.js";
import displayTasks from "./DomControll/displayTasks.js";
import {
  projectDialog,
  taskDialog,
  addProjectBtn,
  addTaskBtn,
} from "./DomControll/modalControll.js";
import { sidebarBtn } from "./DomControll/sidebarControll.js";
import {
  displayProject,
  displayProjects,
  getCustomProjects,
} from "./DomControll/displayProjects.js";
import { saveLocal, loadLocalProject } from "./localStorage.js";

const projectList = new ProjectList();
const inboxProject = new Project("default");
projectList.inboxProject = inboxProject;

document.querySelector(".inbox").addEventListener("click", () => {
  displayTasks(projectList.inboxProject);
});

document.addEventListener("DOMContentLoaded", () => {
  getCustomProjects().forEach((project) => displayProject(project.name));
  Object.assign(projectList, loadLocalProject());
  displayTasks(projectList.inboxProject);
});

export { projectList };
