// import React from 'react'
// import ReactDOM from 'react-dom'
// import '.style.css'

var tanque = 40;
var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina / tanque;

document.write("O consumo de gasolina é: " + consumoDeGasolina + "km/L");

var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool / tanque;

document.write("<br> O consumo de álcool é: " + consumoDeAlcool + "km/L");

var valorEtanol = 1;
var valorGasolina = 6.99;

var desempenhoEtanol = consumoDeAlcool / consumoDeGasolina;
var valorNaBomba = valorEtanol / valorGasolina;

document.write(
  "<br> O desempenho do carro com etanol é de " +
    Math.round(desempenhoEtanol * 100) +
    "%."
);

document.write(
  "<br> A relação do preço etanol/gasolina na bomba é de " +
    Math.round(valorNaBomba * 100) +
    "%."
);

if (valorNaBomba <= desempenhoEtanol) {
  document.write("<br> Vale mais a pena o etanol!");
} else {
  document.write("<br> Vale mais a pena a gasolina!");
}
