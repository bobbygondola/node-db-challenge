const db = require('../data-config')

//gets
function getProjects(){
    return db('projects')
}
function getAllResources(){
    return db('resources')
}
function getAllTasks(){
    return db('tasks')
    .join("projects", "projects.id", "tasks.project_id")
    .select("tasks.project_id", "projects.project_name", "tasks.desc", "projects.desc", "task_name")
    .orderBy("tasks.id")
}
function getSpecificTask(id){
    return db('tasks')
    .join('projects', "projects.id", "tasks.project_id")
    .where({project_id:id})
    .orderBy("tasks.id")
    .select("task_name", "notes", "projects.project_name")
}
//adds
function addProject(newProject){ //help
    return db('projects')
    .insert(newProject)
}
function addResource(newResource){
    return db('resources')
    .insert(newResource)
}
function addTask(newTask){
    return db('tasks')
    .insert(newTask)
}


module.exports = {
    getProjects,
    getAllResources,
    addProject,
    addResource,
    addTask,
    getAllTasks,
    getSpecificTask
}