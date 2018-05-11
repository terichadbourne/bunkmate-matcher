/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

var Camper = require("../models/camperModel");

//creates service
var CamperService = {};

//lists campers
CamperService.list = function(searchParams)	{
	console.log("service: list");
	return Camper.find(searchParams)
	.then((campers) => {
		return campers;
	})
	.catch((err)=>{
		throw err;
	});
} 
	

//saves a new camper to database
CamperService.create = function(camperObject) {
	var camper = new Camper(camperObject);
	console.log("service: creating new record: " + camper);
	return camper.save()
	.then((camper) => {
		console.log("service: saving: " + camper);
		return camper;
	})
	.catch ((err) => {
		throw err;
	})
}


//displays a camper record with edit form filled in
CamperService.read = function(camperID) {
	console.log("service - reading camper: " + camperID);
	return Camper.findOne({ _id: camperID})
	.then((camper) => {
		console.log("service: reading: " + camper);
		return camper;
	})
	.catch((err) => {
		throw err;
	})
}	

//updates a camper record 
CamperService.update = function(camperID, camperObject) {
	console.log("service - updaing record :" + camperID);
	return Camper.findByIdAndUpdate(
		camperID, 
		{
			$set: camperObject
		}, 
		{
			new: true
		}
	)
	.then((camper) => {
		console.log("service: updating: " + camper);
		return camper;
	})
	.catch((err) => {
		throw err;
	})
}

//deletes a camper record
CamperService.delete = function(camperID) {
	console.log("called CamperService.delete on: " + camperID);
	return Camper.findByIdAndRemove(camperID)
	.then((camper) => {
		console.log("service: deleting: " + camper);
		return camper;
	}) 
	.catch ((err) => {
		throw err;
	})
}


module.exports = CamperService;
