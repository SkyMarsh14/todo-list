import "./styles.css"
import { Project, ProjectList } from "./projectManager.js";
import displayInbox from "./tabs/inbox.js";

const projectList = new ProjectList;
const inboxProject = new Project("default");
projectList.inboxProject = inboxProject;

inboxProject.addTask("study Japanese", "read 500 pages", "Aug 30th", "high");
inboxProject.addTask("study Japanese", "read 500 pages", "Aug 30th", "high");

inboxProject.printTask();
displayInbox(inboxProject);

export { projectList };