import Project from "./project.js";
export const contentDiv = document.querySelector('main');
export const defaultProject = new Project;
export const projects = [defaultProject];
export function clearContentDiv(){
    contentDiv.innerHTML = "";
}

defaultProject.name = "default";
export function addProject(projectName){
    const project = new Project;
    project.name = projectName;
    projects.push(project);
}

