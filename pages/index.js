// import React from 'react'
// import ReactDOM from 'react-dom'
// import '.style.css'

let consumoDeGasolina = document.getElementById("km-gas");

// document.write("O consumo de gasolina é: " + consumoDeGasolina + "km/L");

let consumoDeAlcool = document.getElementById("km-alc");

// document.write("<br> O consumo de álcool é: " + consumoDeAlcool + "km/L");

let valorEtanol = document.getElementById("value-alc");
let valorGasolina = document.getElementById("value-gas");

let desempenhoEtanol = consumoDeAlcool / consumoDeGasolina;

let valorNaBomba = valorEtanol / valorGasolina;

let desempenho = Math.round(desempenhoEtanol * 100);

let relacaoValor = Math.round(valorNaBomba * 100);

/** document.write(
  "<br> O desempenho do carro com etanol é de " +
    Math.round(desempenhoEtanol * 100) +
    "%."
);

document.write(
  "<br> A relação do preço etanol/gasolina na bomba é de " +
    Math.round(valorNaBomba * 100) +
    "%."
);*/
let answer = document.querySelector("h4");

function submit() {
  if (relacaoValor <= desempenho) {
    answer.innerHTML = "Vale mais a pena o etanol!";
  } else {
    answer.innerHTML = "Vale mais a pena a gasolina!";
  }
}
