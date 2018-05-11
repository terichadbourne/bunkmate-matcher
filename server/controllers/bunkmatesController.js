/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

//imports required modules
var CamperService = require('./CamperService');

//creates the controller
var bunkmatesController = {};

//lists campers
bunkmatesController.list = function(req,res) {
	
	CamperService.list({})  
	.then ((campers) => {
		res.render('list', {
			"campers": campers
		});
	})
	.catch((err)=>{
		console.log("Error from bunkmatesController.list: " + err);
		bunkmatesController.error(err, res);
	})
}

//creates a camper and saves to database
bunkmatesController.create = function(req, res) {
	var values = assignRoomType(req);

	CamperService.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		gender: req.body.gender, 
		snoring: req.body.snoring,
		sleepHeaviness: req.body.sleepHeaviness,
		bunkmateGender: req.body.bunkmateGender,
		acceptableRoom: values[0],
		classes: values[1]
	})
	.then((c) => {
		console.log("saving: " + c);
		res.redirect('/bunkmates');
	})
	.catch ((err) => {
		console.log("Error from bunkmatesController.create:" + err);
		bunkmatesController.error(err, res);
	})
}

//displays a camper record with edit form filled in
bunkmatesController.read = function(req, res) {
	CamperService.read(req.params.camperid)
	.then((camper) => {
		console.log("found: " + camper);
		res.render('update', {
			"camper": camper
		});
	})
	.catch((err) => {
		console.log("Error from bunkmatesController.read: " + err);
		bunkmatesController.error(err, res);
	})
}

//updates a camper record 
bunkmatesController.update = function(req, res) {
	
	var values = assignRoomType(req);

	CamperService.update(
		req.params.camperid, 
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			gender: req.body.gender, 
			snoring: req.body.snoring,
			sleepHeaviness: req.body.sleepHeaviness,
			bunkmateGender: req.body.bunkmateGender, 
			acceptableRoom: values[0],
			classes: values[1]
		}
	)
	.then((camper) => {
		console.log("updated: " + camper);
		res.redirect('/bunkmates');
	})
	.catch((err) => {
		console.log("Error from bunkmatesController.update: " + err);
		bunkmatesController.error(err, res);
	})
}

//deletes a camper record
bunkmatesController.delete = function(req, res) {
	console.log("called bunkmatesController.delete on: " + req.params.camperid);
	CamperService.delete(req.params.camperid)
	.then((camper) => {
		res.redirect('/bunkmates');
	}) 
	.catch ((err) => {
		console.log("Error from bunkmatesController.delete: " + err);
		bunkmatesController.error(err, res);
	})
}


//determines appropriate room types
function assignRoomType(req) {

	var classes = "";
	var room = "";

	if (req.body.bunkmateGender == "Male") {
		if (req.body.gender == "Male") {
			room = "Male";
			classes = "male maleCabin"
		} else if (req.body.gender == "Non-Binary") {
			room = "Male";
			classes = "nonbinary maleCabin"
		}
	} else if (req.body.bunkmateGender == "Female") {
		if (req.body.gender == "Female") {
			room = "Female";
			classes = "female femaleCabin";
		} else if (req.body.gender == "Non-Binary") {
			room = "Female";
			classes = "nonbinary femaleCabin"
		}
	} else if (req.body.bunkmateGender == "No Preference") {
		if (req.body.gender == "Male") {
			room = "Co-Ed or Male";
			classes = "male maleCabin coedCabin";
		} else if (req.body.gender == "Female") {
			room = "Co-Ed or Female";
			classes = "female femaleCabin coedCabin";
		} else if (req.body.gender == "Non-Binary") {
			room = "Co-Ed";
			classes = "nonbinary coedCabin"
		}
	}

	var values = [room, classes];
	return values;
}

module.exports = bunkmatesController;