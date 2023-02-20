'use strict';

//definire le variabili
const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favColor = prompt('Inserisci il colore preferito');

//interpolazione variabili
const password = `${firstName}${lastName}${favColor}89`

//stampo interpolazione 
console.log(password);

//mostro risultato su html
document.querySelector('p').innerHTML = password;