import { projectList } from ".";
import { ProjectList, Project } from "./projectManager";

function saveLocal() {
  // Convert the `projectList` into a serializable format
  const serializableProjects = {};

  // Serialize each project individually
  Object.keys(projectList).forEach((key) => {
    serializableProjects[key] = {
      name: projectList[key].name,
      tasks: projectList[key].tasks,
    };
  });

  localStorage.setItem(
    "localProjectList",
    JSON.stringify(serializableProjects),
  );
}
function loadLocalProject() {
  const localProjectJson = localStorage.getItem("localProjectList");
  const localProjects = JSON.parse(localProjectJson);

  // Create a new instance of ProjectList
  const restoredProjectList = new ProjectList();

  // Restore each project and its prototype
  Object.keys(localProjects).forEach((key) => {
    const projectData = localProjects[key];
    const restoredProject = Object.assign(new Project(), projectData);

    // Assign the restored project to the project list
    restoredProjectList[key] = restoredProject;
  });

  return restoredProjectList;
}

export { saveLocal, loadLocalProject };
