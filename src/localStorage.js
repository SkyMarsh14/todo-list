import { projectList } from ".";

function saveLocal() {
  localStorage.setItem("localProjectList", JSON.stringify(projectList));
}
function loadLocalProject() {
  const localProjectJson = localStorage.getItem("localProjectList");
  const localProject = JSON.parse(localProjectJson);
  return localProject;
}
export { saveLocal, loadLocalProject };
