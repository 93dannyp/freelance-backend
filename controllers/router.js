
//___________________
// Requirements
//___________________
const express = require('express')
const router = express.Router()
const Contact = require('../models/contact.js')
const bodyParser = require('body-parser')




//___________________
// Routes
//___________________

router.get('/', (req, res) => {
    return Contact.findAll().then((contacts) => 
        res.send(contacts))
    .catch((err) => {
        console.log('There was an error querying contacts', JSON.stringify(err))
        return res.send(err)
    })
})


router.post('/', (req, res) => {
    return Contact.create(req.body).then((contact) => {
        res.send(contact.dataValues)
    }).catch((err) => {
        console.log('there was an error creating a contact', JSON.stringify(contact))
        return res.status(400)
    })
})

router.get('/:id/edit', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    return Contact.findByPk(id)
    .then((data) => {
        console.log(data.dataValues)
        res.send(data.dataValues)
        // res.status(200).send(JSON.stringify(data.dataValues))
    }
    ).catch(err => {console.log(err)
    res.status(400).send(err)
})
})

router.put('/:id', (req, res) => {
    console.log(res)
    return Contact.update(req.body, {id: req.params.id})
    .then((updatedContact) => {
        res.send(updatedContact)
    })
    .catch((err) => {
        console.log('there was an error updating', err)
        res.status(400).send(err)
    })
    // console.log(req.params.id)
    // const id = parseInt(req.params.id)
    // console.log(req.params.id)
    // return Contact.findByPk(id).then((contact) => {         
        ///// update code was here ////
    //  }
    //  )
    //  .catch((err) => {
    //      console.log('there was an error finding by pk', err)
    //      res.status(400).send(err)
    //  })
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    return Contact.findByPk(id)
    .then((contact) => {
        contact.destroy()})
        .then(() => res.send({id}))
        .catch((err) => {
            console.log('There was an error deleting the contact', JSON.stringify(err))
            res.status(400).send(err)
        })
})

module.exports = router