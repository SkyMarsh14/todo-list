import TaskManager from "./TaskManager"

export default class Project extends TaskManager{
    constructor(){
        super();
    }

    set name(projectName){
        this._project = projectName;
    }
    get name(){
        return this._project
    }
}
