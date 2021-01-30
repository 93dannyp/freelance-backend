// Requirements
const express = require('express')
const contact = express.Router()
const Contact = require('../models/contact.js')
const bodyParser = require('body-parser')

// Routes
contact.get('/', (req, res) => {
    return Contact.findAll().then((contacts) => {
        res.send(contacts)
    })
    .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
    })
})

contact.post('/', (req, res) => {
    return Contact.create(req.body).then((contact) => {
        res.send(contact.dataValues)
    })
    .catch((err) => {
        console.log('there was an error creating a contact', JSON.stringify(contact))
        return res.status(400)
    })
})

contact.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Contact.findByPk(id)
    .then((contact) => {
        contact.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            img: req.body.img
        })
        .then((changedContact) => {
            changedContact.save()
        })
        .catch((err) => {
            console.log('there was an error updating', err)
            res.status(400).send(err)
        })     
    })
    .catch((err) => {
        console.log('there was an error finding by pk', err)
        res.status(400).send(err)
    })
})

contact.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return Contact.findByPk(id)
    .then((contact) => {
        console.log(contact)
        contact.destroy()
    })
    .then(() => res.send({id}))
    .catch((err) => {
        console.log('There was an error deleting the contact', JSON.stringify(err))
        res.status(400).send(err)
    })
})

module.exports = contact