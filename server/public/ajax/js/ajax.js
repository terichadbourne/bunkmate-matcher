
/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

//makes sure DOM has loaded first
$(document).ready(function() {
	
	//sets URI to use in various functions
	var uri = "http://159.65.38.165:8080/api/bunkmates";

	//creates new camper record
	function createCamper() {

		//create JSON object from form 
		let camper = {
			"firstName": $('#firstName').val(),
			"lastName": $('#lastName').val(),
			"gender": $('input[name=gender]:checked').val(),
			"snoring": $('input[name=snoring]:checked').val(),
			"sleepHeaviness": $('input[name=sleepHeaviness]:checked').val(),
			"bunkmateGender": $('input[name=bunkmateGender]:checked').val()
		}
		console.log("creating new camper record " + camper);

		//sends camper record to server
		$.ajax({
			contentType: "application/json",
			url: uri + "/create",
			type: "post",
			data: JSON.stringify(camper),
			dataType: "json"
		}).done((data) => {
			console.log("showing newly submitted camper: " + data);
			$('#camperDisplay').val(JSON.stringify(data));
		}).fail((err) => {
			console.log("failed to create camper: " + err);
		})
	}

	//updates camper record
	function updateCamper() {
		let camperID = $('#camperID').val();
		console.log("updating record: " + camperID);
		
		//creates JSON object from form 
		let camper = {
			"firstName": $('#firstName').val(),
			"lastName": $('#lastName').val(),
			"gender": $('input[name=gender]:checked').val(),
			"snoring": $('input[name=snoring]:checked').val(),
			"sleepHeaviness": $('input[name=sleepHeaviness]:checked').val(),
			"bunkmateGender": $('input[name=bunkmateGender]:checked').val()
		}

		console.log("updating camper as: " + camper);

		//sends camper record to server
		$.ajax({
			contentType: "application/json",
			url: uri + "/update/" + camperID,
			type: "put",
			data: JSON.stringify(camper),
			dataType: "json"
		}).done((data) => {
			console.log("displaying updated camper record: " + data);
			$('#camperDisplay').val(JSON.stringify(data));
		}).fail((err) => {
			console.log("failed to update camper: " + err);
		})
	}

	//deletes camper record
	function deleteCamper() {

		let camperID = $('#camperID').val();
		console.log("clicked update button to update record: " + camperID);
	
		//sends camper record to server
		$.ajax({
			url: uri + "/delete/" + camperID,
			type: "delete",
			dataType: "json"
		}).done((data) => {
			console.log("displaying deleted camper record: " + data);
			$('#camperDisplay').val(JSON.stringify(data));
		}).fail((err) => {
			console.log("failed to delete camper: " + err);
		})
	}

	//lists (reads) all campers
	function listCampers() {
		console.log("reading list of all campers");
		$.getJSON(uri + "/", (data) => {
			console.log("read this data: " + data);
			$('#campersDisplay').val(JSON.stringify(data));
		}).fail((err) => {
			console.log("Error retrieving list of campers");
		})
	}

	//ensures form never submits to avoid issues
	$('#camperForm').on('submit', function() {
		return false;
	})

	//sets up event handlers for all CRUD buttons
	$('#createBtn').on('click', createCamper);
	$('#updateBtn').on('click', updateCamper);
	$('#deleteBtn').on('click', deleteCamper);
	$('#readBtn').on('click', listCampers);

});

