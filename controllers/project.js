const express = require('express')
const project = express.Router()
const Project = require('../models/project.js')

project.post('/', (req, res) => {
    return Project.create(req.body).then((newProject) => {
        res.send(newProject.dataValues)
    }).catch((err) => {
        console.log('there was an error creating a contact', err)
        return res.status(400)
    })
})

module.exports = project