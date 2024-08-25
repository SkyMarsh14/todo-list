import "./styles.css";
import { Project, ProjectList } from "./projectManager.js";
import displayTasks from "./DomControll/displayTasks.js";
import {projectDialog, taskDialog, addProjectBtn,addTaskBtn} from "./DomControll/modalControll.js"
import { differenceInCalendarDays } from "date-fns";

const result = differenceInCalendarDays(
  new Date(2024,8,30), new Date(2024,8,20) 
);
console.log(result);

const projectList = new ProjectList();
const inboxProject = new Project("default");
projectList.inboxProject = inboxProject;

inboxProject.addTask("study Japanese", "read 500 pages", "Aug 30th", "high");
inboxProject.addTask("Study English", "read 500 pages");

document
  .querySelector(".inbox")
  .addEventListener("click", () => displayTasks(inboxProject));

displayTasks(inboxProject);
projectList.addProject("hello");

export { projectList };
