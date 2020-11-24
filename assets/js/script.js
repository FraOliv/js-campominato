var numeriRandomPC = [];
var numeriUtente = [];
var punteggio = 0;
var chance = 84;
var numeroUtente;
var found = false;
var Difficoltà;
var numeroMax;
var numeroMin;


// chiedo Difficoltà difficoltà 
Difficoltà = Number(prompt("Inserisci il livello di difficoltà: 0, 1 oppure 2 "));
while (Difficoltà != 0 && Difficoltà != 1 && Difficoltà != 2){
  Difficoltà = Number(prompt("Per favore inserisci il livello corretto di difficoltà: 0, 1 oppure 2"));
}

switch (Difficoltà) {
  case 0:
    numeroMin = 1;
    numeroMax = 100;
    chance = 84;
    var titoloDomanda = "Inserisci un numero da 1 a 100";
    break;

  case 1:
    numeroMin = 1;
    numeroMax = 80;
    chance = 64;
    titoloDomanda = "Inserisci un numero da 1 a 80";
    break;
  case 2:
    numeroMin = 1;
    numeroMax = 50;
    chance = 34;
    titoloDomanda = "Inserisci un numero da 1 a 50";
    break;

    default:
    case 0:
    numeroMin = 1;
    numeroMax = 100;
    chance = 84;
    var titoloDomanda = "Inserisci un numero da 1 a 100";
}


// genero numeri random
while (numeriRandomPC.length < 16) {
  //inserisco solo se il numero non è già presente nell'array
  var numeroCasuale = generaNumeriRandomPC(1, numeroMax);
  var cerca = presenteInArray(numeriRandomPC, numeroCasuale);
  if (cerca == false) {
    numeriRandomPC.push(numeroCasuale);
  }
}




while (numeriUtente.length < chance && found == false) {
  // chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range

  numeroUtente = Number(prompt(titoloDomanda));
  richiediNumeroCorretto();
  numUgualeInserito()

  if (presenteInArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
    // se il numero dell'utente è presente
    if (presenteInArray(numeriRandomPC, numeroUtente) == true) {
      console.log("partita finita");
      document.getElementById("messaggio").innerHTML = "Partita finita. Hai beccato il numero nascosto";
      found = true;
    } else {
      punteggio++;
    }
  }
}



console.log(" è stato found? " + found);
console.log("punteggio" + punteggio);
document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio + " i numeri dove erano posizionate le mine erano: " + numeriRandomPC;

if (numeriUtente.length == chance) {
  document.getElementById("messaggio").innerHTML = "Hai vinto la PARTITA senza lasciarci le penne!  " + " i numeri dove erano posizionate le mine erano: " + numeriRandomPC;;
}

// FUNZIONI DELLO SCRIPT
// genero funzione numero random
function generaNumeriRandomPC(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che controlla che un numero sia in un certo range
function controlloRangeNumeri(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}

// funzione che cerca in un array
function presenteInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;1
  }
  return result;
}
// richiedi numero corretto
function richiediNumeroCorretto() {
  while (controlloRangeNumeri(numeroMin, numeroMax, numeroUtente) == false) {
    numeroUtente = Number(prompt("Per favore inserisci un numero corretto: da 1  a " + numeroMax));
    console.log('Numero inserito: ' + numeroUtente);
  }
}

function numUgualeInserito() {
  while (presenteInArray(numeriUtente, numeroUtente) == true) {
numeroUtente = Number(prompt ("Avevi già inserito questo numero. Riprova con un numero diverso da " + numeroMin + " a " + numeroMax));
  }
}