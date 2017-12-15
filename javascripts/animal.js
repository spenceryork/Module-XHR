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