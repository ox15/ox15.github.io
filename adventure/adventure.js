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
    $("#log").prepend("<li>" + data[link].content + "</li>");
    $("#log li").removeClass("alert-primary");
    $("#log li").addClass("alert alert-secondary");//Make the last one gray
    $("#log li:first-child").addClass("alert-primary")
    $("#log li:first-child").removeClass("alert-secondary")
    //Hide all buttons
    document.querySelector("#btn0").hidden = true
    document.querySelector("#btn1").hidden = true
    document.querySelector("#btn2").hidden = true
    document.querySelector("#btn3").hidden = true
    var hasLinks = false;
    for (i = 0; i < data[link].links.length; i++) {
        console.log("  Buttons availible: "+i);
        $("#btn" + i).data("link", data[link].links[i]);
        console.log("    link:"+data[link].links[i]);
        document.querySelector("#btn"+i).hidden = false
        hasLinks = true;
    }
    document.querySelector("#reload").hidden = false
    if (data[link].change === true) {
        console.log("Change to somebody else");
        $("#log li:first-child").addClass("alert-info");
    }
    if (data[link].win === true) {
        console.log("You won!");
        $("#log li:first-child").addClass("alert-success");
    }
    if (data[link].win === false) {
        console.log("You lost!");
        $("#log li:first-child").addClass("alert-danger");
    }
}
$(document).ready(function () {//Manage buttons
    console.log("document ready")
    document.querySelector("#btn0").hidden = true
    document.querySelector("#btn1").hidden = true
    document.querySelector("#btn2").hidden = true
    document.querySelector("#btn3").hidden = true
    document.querySelector("#reload").hidden = true
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

});
// Dropdown menus
/** When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function loadStory(filename) {
    choiceCount = 0;
    $.getJSON(filename + "?version=" + storyVersion, function (json) {
        console.log(filename);
        data = json;
        document.querySelector("#log").innerHTML = ""
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