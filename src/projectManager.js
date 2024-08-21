import { projectList } from "./index";
class Project {
  constructor(name) {
    this.name = name;
    this.task = [];
  }

  addTask(title, description = "N/A", dueDate = null, priority = "normal") {
    const task = {};
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.completion = false;

    this.task.push(task);
  }
  printTask() {
    this.task.forEach((task,index)=>{
        console.log(`task index: ${index}`);
        for(let value of Object.values(task)){
            console.log(`${value},index: ${Object.values(task).indexOf(value)}`);
        }
    })
  }
}

class ProjectList {
  constructor() {}

  addProject(projectName) {
    if (this.hasOwnProperty(`${projectName}`)) {
      console.log(`Project conflict. Project: "${projectName}" already exists`);
      return;
    }

    const project = new Project(projectName);
    projectList[projectName] = project;
  }

  removeProject(projectName) {
    delete projectList[projectName];
  }

  renameProject(oldProjectName) {
    projectList[newProjectName] = projectList[oldProjectName];
    this.removeProject(oldProjectName);
  }
}

export { Project, ProjectList };
