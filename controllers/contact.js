
//___________________
// Requirements
//___________________
const express = require('express')
const contact = express.Router()
const Contact = require('../models/contact.js')
const bodyParser = require('body-parser')




//___________________
// Routes
//___________________



contact.get('/', (req, res) => {
    console.log('hit the route')
   
    return Contact.findAll().then((contacts) => 
        {console.log(contacts)
        res.send(contacts)})
        
    .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
    })
})


contact.post('/', (req, res) => {
    return Contact.create(req.body).then((contact) => {
        res.send(contact.dataValues)
    }).catch((err) => {
        console.log('there was an error creating a contact', JSON.stringify(contact))
        return res.status(400)
    })
})

// contact.get('/:id/edit', (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log(id)
//     return Contact.findByPk(id)
//     .then((data) => {
//         console.log(data.dataValues)
//         res.send(data.dataValues)
//         // res.status(200).send(JSON.stringify(data.dataValues))
//     }
//     ).catch(err => {
//         console.log(err)
//         res.status(400).send(err)
//     })
// })

contact.put('/:id', (req, res) => {
    console.log('req.params is', req.params)
    const id = parseInt(req.params.id)
    console.log('req.body is',req.body)
    Contact.findByPk(id)
    .then((contact) => {

        console.log('this is the first name', contact)
        // contact = req.body
        // contact.save()
        console.log('this is req.body again', req.body)
        
        contact.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            img: req.body.img
        }).then((changedContact) => {
            console.log('this is the changed contact', changedContact)
            changedContact.save()
            // return res.send(changedContact)
        })
        // .then((updatedContact) => {
        //     console.log('this is the updated contact', updatedContact)
        //     res.send(updatedContact)
        // })
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