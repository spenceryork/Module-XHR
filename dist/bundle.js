(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
let carnivores = [];
let herbivores = [];

let loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(event.target.responseText);
    console.log("carnivores array", carnivores.carnivores);
    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke(carnivores.carnivores);
    console.log("what is this? (callbackToInvoke)", callbackToInvoke);
  });
  loader.open("GET", "carnivoreList.json");
  loader.send();
};

let loadHerbivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    herbivores = JSON.parse(event.target.responseText);
    console.log(herbivores.herbivores);
    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
    callbackToInvoke(herbivores.herbivores);
  });
  loader.open("GET", "herbivoreList.json");
  loader.send();
};




module.exports = { loadCarnivores, loadHerbivores };
},{}],2:[function(require,module,exports){
"use strict";

const animal = require("./animal");

function showCarnivores(carnivores) {
  // code that takes the carnovores array and displays it to the DOM
   let carnDiv = document.getElementById("carnivores");
    carnivores.forEach(function(animal){
      console.log(animal);
      carnDiv.innerHTML += `<li>${animal}</li>`;
  });
}

function showHerbivores(herbivores) {
    // code that takes the carnovores array and displays it to the DOM
    let carnDiv = document.getElementById("herbivores");
    herbivores.forEach(function(animal){
      console.log(animal);
      carnDiv.innerHTML += `<li>${animal}</li>`;
  });
}


animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);
},{"./animal":1}]},{},[2]);
