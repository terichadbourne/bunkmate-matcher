/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 5
*/

//imports required modules
var express = require('express');
var router = express.Router();
var bunkmates = require('../controllers/bunkmatesController');

//prints a list of campers
router.get('/', bunkmates.list);

//creates a single camper
router.post('/create', bunkmates.create);

//displays a single camper in edit mode
router.get('/:camperid', bunkmates.read);

//updates a single camper
router.post('/update/:camperid', bunkmates.update);

//deletes a single camper
router.post('/delete/:camperid', bunkmates.delete);

//exports router as module
module.exports = router;