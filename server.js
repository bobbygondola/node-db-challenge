//imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
//declare server
const server = express();
//middleware
server.use(morgan());
server.use(helmet());
server.use(express.json());
//db
const db = require('./data/helpers/helpers')

//functions
server.get('/', (req,res) => {
    res.status(200).json({API:"is up bobby, you set up the server in 2 mins"})
})
//all projects
server.get('/api/projects', (req,res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        console.log("get projects error", error)
        res.status(500).json({message: "error getting"})
        }) 
})

//specific tasks
server.get('/api/:id/tasks', (req,res) => {
    const id=req.params.id;
    db.getSpecificTask(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
})

//all resources available
server.get('/api/resources', (req,res) => {
    db.getAllResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        console.log("get res error", error)
        res.status(500).json({message: "error getting"})
        }) 
})
//all tasks
server.get('/api/tasks', (req,res) => {
    db.getAllTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        console.log("get res error", error)
        res.status(500).json({message: "error getting"})
        }) 
})


//posts


//adding Projects
server.post('/api/projects', (req,res) => {
    const newProject = req.body;
    db.addProject(newProject)
    .then(neww => {
        res.status(200).json(neww)
    })
    .catch(error => {
        console.log("add proj error", error)
        res.status(500).json({message: "error posting"})
    }) 
})
//post resources
server.post('/api/resources', (req,res) => {
    const newResource = req.body;
    db.addResource(newResource)
    .then(neww => {
        res.status(200).json(neww)
    })
    .catch(error => {
        console.log("add res error", error)
        res.status(500).json({message: "error posting"})
        }) 
})
//posts tasks
server.post('/api/tasks', (req,res) => {
    const newTask = req.body;
    db.addTask(newTask)
    .then(newTask => {
        res.status(200).json(newTask)
    })
    .catch(error => {
        console.log("add tasks error", error)
        res.status(500).json({message: "error posting"})
        }) 
})

module.exports = server;