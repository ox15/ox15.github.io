
var storyVersion = 6; // Tells the client cache when to refresh stories
var started = false;
var data = [{
    "id" : 0,
    "decr" : "Select a story from the dropdown",
    "links" : []
}];
var choiceCount = 0;
function update(link, buttonPressed) {
    choiceCount++;
    if (buttonPressed) {
        console.info(choiceCount + ") You chose choice " + buttonPressed + ", which linked to event " + link);
    } else {
        console.log(choiceCount + ") Loading choice " + link);
    }
    $("#log").prepend("<li hidden>" + data[link].decr + "</li>");
    $("#log li").removeClass("active");
    $("#log li").addClass("inactive");//Make the last one gray
    $("#log li:first-child").addClass("active").slideDown("slow");
    //Hide all buttons
    $("#btn0").prop('hidden', true);
    $("#btn1").prop('hidden', true);
    $("#btn2").prop('hidden', true);
    $("#btn3").prop('hidden', true);
    $("#reload").prop('hidden', true);
    var hasLinks = false;
    for (i = 0; i < data[link].links.length; i++) {
        //console.log("  i:"+i);
        $("#btn" + i).data("link", data[link].links[i]);
        $("#btn" + i).prop('hidden', false);
        hasLinks = true;
    }
    if (!hasLinks) {//When you're done, show the reload button
        $("#reload").prop('hidden', false);
        if (data[link].win === true) {
            console.log("You won!");
            $("#log li:first-child").addClass("win");
        }
        if (data[link].win === false) {
            console.log("You lost!");
            $("#log li:first-child").addClass("lose");
        }
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
        $("#log").html("");
        update(0);
        console.clear();
    });
    
    
    $("#info").click(function () {//show info
        $("#infotext").fadeToggle();
    });
    
    $("#selectStory").click(function () {//show info
        storyDropdownFunction();
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
function storyDropdownFunction() {
    'use strict';
    document.getElementById("storyDropdown").classList.toggle("show");
}
function loadStory(filename) {
    $.getJSON(filename + "?version=" + storyVersion, function (json) {
        data = json;
        update(0);
        $("#error").fadeOut();
    })
        .fail(function () {
            $("#error").text("Error on " + filename + ". Check the console (press F12) for more information.");
            $("#error").fadeIn();
        });
}