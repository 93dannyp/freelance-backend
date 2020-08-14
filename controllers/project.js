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

module.exports = project