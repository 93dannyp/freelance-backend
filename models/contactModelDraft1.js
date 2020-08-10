const Sequelize = require('sequelize');
path = null
const sequelize = new Sequelize('sqlite::memory:')

let Contact = sequelize.define('contact', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    email: Sequelize.STRING,
    img: Sequelize.STRING,
})

Contact.sync().then(() => {
    console.log('New Contact table created')
}).finally(() => {
    sequelize.close()
})

module.exports = Contact