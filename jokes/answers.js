// This script shows the answers to the jokes and fades the buttons when you click them.
$(document).ready(function(){
	$("#button1").click(function(){
		$("#answer1").fadeIn();
		$("#button1").fadeOut();
        console.info("button 1 pressed");

	});
	$("#button2").click(function(){
		$("#answer2").fadeIn();
		$("#button2").fadeOut();
        console.info("button 2 pressed");

	});
    $("#button3").click(function(){
		$("#answer3").fadeIn();
		$("#button3").fadeOut();
        console.info("button 3 pressed");

	});
     $("#button4").click(function(){
		$("#answer4").fadeIn();
		$("#button4").fadeOut();
        console.info("button 4 pressed");

	});
    $("#button5").click(function(){
		$("#answer5").fadeIn();
		$("#button5").fadeOut();
        console.info("button 5 pressed");

	});
    $("#button6").click(function(){
		$("#answer6").fadeIn();
		$("#button6").fadeOut();
        console.info("button 6 pressed");

	});
     $("#button7").click(function(){
		$("#answer7").fadeIn();
		$("#button7").fadeOut();
        console.info("button 7 pressed");

	});
    $("#button8").click(function(){
		$("#answer8").fadeIn();
		$("#button8").fadeOut();
        console.info("button 8 pressed");

	});
    $("#button9").click(function(){
		$("#answer9").fadeIn();
		$("#button9").fadeOut();
        console.info("button 9 pressed");

	});
    $("#button10").click(function(){
		$("#answer10").fadeIn();
		$("#button10").fadeOut();
        console.info("button 10 pressed");

	});
    $("#button11").click(function(){
		$("#answer11").fadeIn();
		$("#button11").fadeOut();
        console.info("button 11 pressed");

	});
    $("#button12").click(function(){
		$("#answer12").fadeIn();
		$("#button12").fadeOut();
        console.info("button 12 pressed");

	});
    $("#unsolvedhs").click(function(){
        $("#unsolvedhs").fadeOut();
		$("#answerhs").fadeIn();
        console.info("horseshoe button pressed");

	});
    $("#unsolvedcup").click(function(){
        $("#unsolvedcup").fadeOut();
		$("#answercup").fadeIn();
        console.info("cup button pressed");

	});
});
