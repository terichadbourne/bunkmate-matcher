/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 5
*/

//imports required module
var mongoose = require("mongoose");

//sets required format for camper records
var camperSchema = new mongoose.Schema({
	firstName: {type:String, required:true},
	lastName: {type:String, required:true},
	gender: {type:String, required:true},
	snoring: {type:String, required:true},
	sleepHeaviness: {type:String, required:true},
	bunkmateGender: {type:String, required:true},
	acceptableRoom: {type:String, required:true},
	classes: {type:String, required:true}
});

//exports Mongoose model as module
module.exports = mongoose.model('Camper', camperSchema);