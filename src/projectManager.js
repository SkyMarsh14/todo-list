import { projectList } from "./index";
import { saveLocal } from "./localStorage";
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(title, description = "N/A", dueDate = null, priority = "normal") {
    const task = {};
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.completion = false;

    this.tasks.push(task);
    localStorage.setItem("localProjectList", JSON.stringify(projectList));
  }
  printTask() {
    this.tasks.forEach((task, index) => {
      console.log(`task index: ${index}`);
      console.log(Object.entries(task));
    });
  }
}

class ProjectList {
  constructor() {}

  addProject(projectName) {
    if (this.hasOwnProperty(`${projectName}`)) {
      console.log(`Project conflict. Project: "${projectName}" already exists`);
      return false;
    } else if (projectName.length === 0) return false;

    const project = new Project(projectName);
    projectList[projectName] = project;
    saveLocal();
    return true;
  }

  removeProject(projectName) {
    delete projectList[projectName];
    saveLocal();
  }

  renameProject(oldProjectName) {
    projectList[newProjectName] = projectList[oldProjectName];
    this.removeProject(oldProjectName);
  }
}

export { Project, ProjectList };
