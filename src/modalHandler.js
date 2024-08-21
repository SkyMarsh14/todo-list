import { defaultProject, addProject} from "./util.js";

const projectDialog = document.querySelector('.project-dialog');
const taskDialog = document.querySelector('.task-dialog');

const addProjectBtn = document.querySelector('.add-project');
const addTaskBtn = document.querySelector('.addTask');

addProjectBtn.addEventListener("click",()=>{
    projectDialog.showModal();
})

addTaskBtn.addEventListener("click",()=>{
    taskDialog.showModal();
})

const closeModalBtn = document.querySelectorAll('.closeModalBtn');
closeModalBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        projectDialog.close();
        taskDialog.close();
});
});

taskDialog.addEventListener("submit", (e)=>{
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const prio = document.querySelector('#prio').value;

    defaultProject.addTask(title,description,dueDate,prio);

    document.querySelector('#task-form').reset();

    taskDialog.close();

});

projectDialog.addEventListener("submit", (e)=>{
    e.preventDefault();

    const project = document.querySelector('#projectInput').value;

    addProject(project);
    const projectListDiv = document.querySelector('.projects');

    
    const projectDiv = document.createElement('button');
    projectDiv.classList.add('projectTab', project);
    projectDiv.textContent = project;
    projectListDiv.appendChild(projectDiv);

    document.querySelector('.project-form').reset();
    projectDialog.close();
});

