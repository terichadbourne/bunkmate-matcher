/* 
Teri Chadbourne
CSCI E-31, Spring 2018
Assignment 7
*/

//waits until document is loaded
$( document ).ready(function() {

  'use strict';

  //runs optionReveal when loading page
  optionReveal();

  //runs optionReveal when there's a change to gender value radio in form
  $( "#male" ).change(function() {
      optionReveal();
    }); 

  $( "#female" ).change(function() {
      optionReveal();
    }); 

  $( "#non-binary" ).change(function() {
      optionReveal();
  }); 
  
  //updates roommate options according to gender selection
  function optionReveal() {

    //if gender is male...
    if ($( "#male" ).prop("checked")) {
    	//unchecks female roommate request if relevant before option is hidden
    	if ($("#femaleRoom").prop("checked")) {
      		$("#femaleRoom").prop("checked", false);
      	}
        //hides female roommate option and keeps male and coed options
        $(".maleRoom").show();
        $(".femaleRoom").hide();
        $("#no-preference").show();

    //else if gender is female...
    } else if ($( "#female" ).prop("checked")) {
	//unchecks male roommate request if relevant before option is hidden
		if ($("#maleRoom").prop("checked")) {
			$("#maleRoom").prop("checked", false);
		}
		//hides male roommate option and keeps female and coed options
		$(".maleRoom").hide();
		$(".femaleRoom").show();
		$("#no-preference").show();

    //else if non-binary (or no gender) is chosen, keeps/makes all 3 roommate options visible
    } else {
        $(".maleRoom").show();
        $(".femaleRoom").show();
        $("#no-preference").show();
    } 

  } 

}); 