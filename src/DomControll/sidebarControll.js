const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener("click", () => {
  const collapse = sidebar.dataset.collapse;
  if (collapse==="true") sidebar.dataset.collapse = "false";
  else sidebar.dataset.collapse = "true";

});
export {sidebarBtn}