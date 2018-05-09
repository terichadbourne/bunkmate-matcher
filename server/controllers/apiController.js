/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 5
*/

//imports required modules
var CamperService = require('./CamperService');

//creates the controller
var apiController = {};

//lists campers
apiController.list = function(req,res) {
	console.log("API: listing campers");
	CamperService.list({})  
	.then ((campers) => {
		console.log("api list of campers: " + campers);
		res.status(200);
		res.send(JSON.stringify(campers));
	})
	.catch((err)=>{
		console.log("Error from apiController.list: " + err);
		apiController.error(err, res);
	})
}

//creates a camper and saves to database
apiController.create = function(req, res) {
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
	.then((camper) => {
		console.log("api saving: " + camper);
		res.status(201);
		res.send(JSON.stringify(camper));
	})
	.catch ((err) => {
		console.log("Error from apiController.create:" + err);
		bunkmatesController.error(err, res);
	})
}

//displays a camper record with edit form filled in
apiController.read = function(req, res) {
	console.log("API - read ID: " + req.params.camperid);
	CamperService.read(req.params.camperid)
	.then((camper) => {
		console.log("api found: " + camper);
		res.status(200);
		res.send(JSON.stringify(camper));
	})
	.catch((err) => {
		console.log("Error from apiController.read: " + err);
		apiController.error(err, res);
	})
}

//updates a camper record 
apiController.update = function(req, res) {
	console.log("API updating camper ID: " + req.params.camperid);
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
		console.log("API updated: " + camper);
		res.status(200);
		res.send(JSON.stringify(camper));
	})
	.catch((err) => {
		console.log("Error from apiController.update: " + err);
		apiController.error(err, res);
	})
}

//deletes a camper record
apiController.delete = function(req, res) {
	console.log("API delete camper ID: " + req.params.camperid);
	CamperService.delete(req.params.camperid)
	.then((camper) => {
		console.log("deleted: " + camper);
		res.status(200);
		res.send(JSON.stringify(camper));
	}) 
	.catch ((err) => {
		console.log("Error from apiController.delete: " + err);
		apiController.error(err, res);
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

apiController.error = function (err, res) {
	console.log(err);
	res.status(500);
	res.send(JSON.stringify({"error": err.message}));
}

module.exports = apiController;