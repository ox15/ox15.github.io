//document.getElementById("storyDropdown").classList.toggle("show");
var storyVersion = 7; // Tells the client cache when to refresh stories
var started = false;
var data = [{
    "id" : 0,
    "content" : "Select a story from the dropdown",
    "links" : []
}];
var choiceCount = 0;
function update(link, buttonPressed) {
    choiceCount++;
    if (buttonPressed) {
        console.log(choiceCount - 1 + ") choice: " + buttonPressed + ", event: " + link);
    } else {
        console.log(choiceCount - 1 + ") event: " + link);
    }
    $("#log").prepend("<li hidden>" + data[link].content + "</li>");
    $("#log li").removeClass("active");
    $("#log li").addClass("inactive");//Make the last one gray
    $("#log li:first-child").addClass("active").slideDown("slow");
    //Hide all buttons
    $("#btn0").fadeOut(10);
    $("#btn1").fadeOut(10);
    $("#btn2").fadeOut(10);
    $("#btn3").fadeOut(10);
    var hasLinks = false;
    for (i = 0; i < data[link].links.length; i++) {
        console.log("  Buttons availible: "+i);
        $("#btn" + i).data("link", data[link].links[i]);
        console.log("    link:"+data[link].links[i]);
        $("#btn" + i).fadeIn();
        hasLinks = true;
    }
    $("#reload").fadeIn();
    if (data[link].change === true) {
        console.log("Change to somebody else");
        $("#log li:first-child").addClass("change");
    }
    if (data[link].win === true) {
        console.log("You won!");
        $("#log li:first-child").addClass("win");
    }
    if (data[link].win === false) {
        console.log("You lost!");
        $("#log li:first-child").addClass("lose");
    }
}
$(document).ready(function () {//Manage buttons
    'use strict';
    $("#btn0").prop('hidden', true);
    $("#btn1").prop('hidden', true);
    $("#btn2").prop('hidden', true);
    $("#btn3").prop('hidden', true);
    $("#reload").prop('hidden', true);
    console.log("Please select a story from the dropdown.");
    $("#btn0").click(function () {//update 1
        var link = $("#btn0").data("link");
        update(link, 1);
    });
    $("#btn1").click(function () {//update 2
        var link = $("#btn1").data("link");
        update(link, 2);
    });
    $("#btn2").click(function () {//update 3
        var link = $("#btn2").data("link");
        update(link, 3);
    });
    $("#btn3").click(function () {//update 4
        var link = $("#btn3").data("link");
        update(link, 4);
    });
    $("#reload").click(function () {//activate the reload button
        $("error").fadeOut();
        $("#log").html("");
        update(0);
        //console.clear();
    });
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            $(".dropdown-content").removeClass('show');
        }
    };

});
// Dropdown menus
/** When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function loadStory(filename) {
    choiceCount = 0;
    $.getJSON(filename + "?version=" + storyVersion, function (json) {
        console.log(filename);
        data = json;
        $("#log").html("");
        update(0);
        //console.clear();
        
        $("#error").fadeOut();
        
    })
        .fail(function( jqxhr, textStatus, error ) {
            $("#error").text("Error: " + filename + ": Can't access JSON data from a local file");
            console.log(error);
            $("#error").fadeIn();
        });
}