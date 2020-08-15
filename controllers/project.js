const express = require('express')
const project = express.Router()
const Project = require('../models/project.js')

project.get('/', (req, res) => {
    return Project.findAll().then((projects) => 
        res.send(projects))
    .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
    })
})

project.post('/', (req, res) => {
    return Project.create(req.body).then((newProject) => {
        res.send(newProject.dataValues)
    }).catch((err) => {
        console.log('there was an error creating a contact', err)
        return res.status(400)
    })
})


// TODO fix bug on route that updats on refresh. Should update automatically 
project.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return Project.findByPk(id)
    .then((project) => {
        console.log(project)
        project.destroy()
    })
    .then(() => res.send({id}))
    .catch((err) => {
        console.log('There was an error deleting the project', JSON.stringify(err))
        res.status(400).send(err)
    })
})

module.exports = project