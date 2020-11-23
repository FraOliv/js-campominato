var RandomNumbers = [];
var UserNumbers = [];
var punteggio = 0;
var chance = 1;
var UserNUM;
var FOUND = false;

// .1 genero numeri random
while (RandomNumbers.length < 16) {
  // 2. inserisco solo se il numero non è già presente nell'array
  var numeroCasuale = generaRandomNumbers(1, 100);
  var cerca = presenteInArray(RandomNumbers, numeroCasuale);
  if (cerca == false) {
    RandomNumbers.push(numeroCasuale);
  }
}
console.log("numeri random " + RandomNumbers);
document.getElementById("numeri-random").innerHTML = RandomNumbers;

// 3. l'utente inserisce un numero per 84 tentativi

while (UserNumbers.length < chance && FOUND == false) {
  // 4. chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range

  UserNUM = Number(prompt("Inserisci un numero da 1 a 100"));
  richiediNumeroCorretto();

  if (presenteInArray(UserNumbers, UserNUM) == false) {
    UserNumbers.push(UserNUM);
    // se il numero dell'utente è presente nelle numberBomb hai perso
    if (presenteInArray(RandomNumbers, UserNUM) == true) {
      console.log("partita finita");
      document.getElementById("messaggio").innerHTML = "Partita finita. Hai beccato il numero nascosto";
      FOUND = true;
    } else {
      punteggio++;
    }
  }
}
console.log(" è stato FOUND? " + FOUND);
console.log("punteggio" + punteggio);
document.getElementById("punteggio").innerHTML = "Hai totalizzato un punteggio di " + punteggio;

if (UserNumbers.length == chance) {
  document.getElementById("messaggio").innerHTML = "Hai vinto la PARTITA senza lasciarci le penne!";
}

// FUNZIONI DELLO SCRIPT
// genero funzione numero random
function generaRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che controlla che un numero sia in un certo range
function controlloRangeNumeri(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;1
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
    i++;
  }
  return result;
}

// richiedi numero corretto
function   richiediNumeroCorretto() {
  while (controlloRangeNumeri(1, 100, UserNUM) == false) {
    UserNUM = Number(prompt("Per favore inserisci un numero corretto: da 0  a 100" ));
    console.log('Numero inserito: ' + UserNUM);
  }
}