/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

//imports required modules
var express = require('express');
var path = require('path');
var bunkmates = require('./routes/bunkmates');
var api = require('./routes/api');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();

//connects to Mongo database, using creds from .env file
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@meanclass-shard-00-00-ssfgq.mongodb.net:27017,meanclass-shard-00-01-ssfgq.mongodb.net:27017,meanclass-shard-00-02-ssfgq.mongodb.net:27017/bunkmates?ssl=true&replicaSet=MEANclass-shard-0&authSource=admin`)
	.then(()=>{console.log('Connected to Mongo successfully');})
	.catch((err)=> console.error(err));

//sets up express
var app = express();

//sets up views to use pug
app.set('views', './views');
app.set('view engine', 'pug');

//set up middleware
var jsonParser = bodyparser.json();
var urlencodedParser = bodyparser.urlencoded({extended: false});

//sets up bodyparser
app.use(bodyparser.urlencoded({extended: false}));

//routes to api 
app.use('/api/bunkmates', jsonParser, api);

//routes to angular app views
app.use('', express.static('../client/dist'));
app.use('/campers', express.static('../client/dist'));
app.use('/camper/:id', express.static('../client/dist'));
app.use('/new', express.static('../client/dist'));
app.use('/', express.static('../client/dist'));


//shows 404 error as needed
app.use((req, res, next) => {
	res.status(404);
	res.send("Sorry, I can't find that file.")
});

//exports server as module
module.exports = app;