// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
//l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare 
//centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// DATI IN POSSESSO

// Prezzo del Biglietto di default per KM
const priceForKm = 0.21;

// DATI CHE CI DA L'UTENTE

// Quanti km deve percorrere
const userKmToGo = parseInt (prompt('Quanti Km vuoi percorrere?'));   

//Età utente
const userAge = parseInt (prompt('Quanti anni hai?'));

// DATI OTTENUTI

// prezzo del biglietto default
const ticketPrice = priceForKm * userKmToGo;

// Biglietto scontnto del 20% per i minori
const discountTicketPriceForMinors = ticketPrice * 0.2;

// Biglietto scontanto del 40% per over 65
const discountTicketPriceForOver65 = ticketPrice * 0.4;

// PREZZO FINALE

//prezzo per minore
const finalPriceMinors = ticketPrice - discountTicketPriceForMinors;

// /prezzo per Over 65
const finalPriceOver65 = ticketPrice - discountTicketPriceForOver65; 

// PARTE LOGICA

// Messaggio all'utente
let userMessage;

if (userAge < 18) {
    userMessage = finalPriceMinors; 
} else if (userAge > 65) {
    userMessage = finalPriceOver65;
} else {
    userMessage = ticketPrice;
}

// Stampo 

// alert('Il prezzo del biglietto è di ' + userMessage)
document.getElementById('price').innerHTML= "il costo del biglietto è di " + userMessage.toFixed(2); 









