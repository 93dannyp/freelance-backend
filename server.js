//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const bodyParser = require('body-parser')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const sequelize = require('sequelize')
const routerController = require('./controllers/router.js')
const projectRouterController = require('./controllers/project.js')
const cors = require('cors')


//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;


// API key environment
const api_key = process.env.API_KEY;

//___________________
// Front end CORS
const whitelist = ['http://localhost:3000'] // TODO: add deployment link to whitelist later
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// use CORS
app.use(cors(corsOptions))


//___________________
//Database

// Open database error / success
const db = new sqlite3.Database('database.sqlite3', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// Close database error / success
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

//___________________
//Middleware
//___________________
// body parser
app.use(bodyParser.json())

//use public folder for static assets
app.use(express.static('public'));

// use router controller
app.use('/api/contacts', routerController)
app.use('/api/projects', projectRouterController)

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));