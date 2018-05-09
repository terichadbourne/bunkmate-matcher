/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 5
*/

//imports required modules
var express = require('express');
var router = express.Router();
var api = require('../controllers/apiController');


//sets up middleware for pre-flight
router.use((req, res, next) => {
	res.set({
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers"
	});

	//if it's a pre-flight, send response with headers
	if(req.method == 'OPTIONS'){
		return res.status(200).end();
	}
	next();
});


//prints a list of campers
router.get('/', api.list);

//creates a single camper
router.post('/create', api.create);

//displays a single camper in edit mode
router.get('/:camperid', api.read);

//updates a single camper
router.put('/update/:camperid', api.update);

//deletes a single camper
router.delete('/delete/:camperid', api.delete);

//exports router as module
module.exports = router;