export default class Task{
    description='none';
    priority = 'normal';
    dueDate = null;
    status = false;

    constructor(title, description, dueDate, priority){
        this.title = title,
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

};