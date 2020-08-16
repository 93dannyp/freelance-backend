const { Sequelize } = require('sequelize')

// if (process.env.DATABASE_URL != null) {
//   const sequelize =  new Sequelize(process.env.DATABASE_URL) 
// }
// else { const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'database.sqlite3'
//   }) 
// }

const sequelize =  new Sequelize(process.env.DATABASE_URL) || new Sequelize({
      dialect: 'sqlite',
      storage: 'database.sqlite3'
}) 

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
})

// closes database connection after 
// .finally(() => {
//   sequelize.close();
// });

module.exports = sequelize