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