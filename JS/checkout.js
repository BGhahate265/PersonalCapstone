/*
Checkout.js
Author: Braddock Ghahate
Date 08.21.18


*/

"use strict";

var formValidity = false;


// Function to turn off select list defaults
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByClassName("custom-control custom-radio");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

//functions to run on page load 
function setUpPage() {
    removeSelectDefaults();
    setUpPage();
    createEventListeners();
}

// enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
