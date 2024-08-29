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

const projectList = new ProjectList();
const inboxProject = new Project("default");
projectList.inboxProject = inboxProject;

inboxProject.addTask("Study Japanese", "read 500 pages", "2024-08/30", "high");
inboxProject.addTask("Study English", "read 500 pages", "2024/10/30", "low");

document
  .querySelector(".inbox")
  .addEventListener("click", () => displayTasks(inboxProject));

displayTasks(inboxProject);
getCustomProjects().forEach((project)=>displayProject(project.name));

export { projectList };
