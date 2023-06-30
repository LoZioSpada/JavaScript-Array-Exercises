// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const john = {  // aggiunto nuovo utente (come oggetto) per testare array.push() nel esercizio punto 6
  name: "John",
  lastName: "Cena",
  isAmbassador: true,
}

const brambilla = { // aggiunto nuovo utente (come oggetto) per testare array.push() nel esercizio punto 6
  name: "Brambilla",
  lastName: "Fumagalli",
  isAmbassador: false,
}

const aldo = {    // aggiunto nuovo utente (come oggetto) per testare array.push() nel esercizio punto 6
  name: "Aldo",
  lastName: "Baglio",
  isAmbassador: true,
}


const prices = [34, 5, 20]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = paul //cambia il valore qui per provare se il tuo algoritmo funziona!

// punti 1, 2, 3, 4, 5 degli esercizi descritti sulla piattaforma EPICODE
let totalPrice = 0

for (let i = 0; i < prices.length; i++) {
  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    totalPrice += prices - ((prices[i]) * 0.3)
  } else {
    totalPrice += prices[i]
  }
}

if (totalPrice <= 100){
  console.log(utenteCheEffettuaLAcquisto.name + " " + (totalPrice + shippingCost)) 
} else {
 console.log(utenteCheEffettuaLAcquisto.name + " " + totalPrice)
}

// punto 6 degli esercizi descritti sulla piattaforma EPICODE
const users = []
users.push(marco, paul, amy, john, brambilla, aldo)

for (let i = 0; i < users.length; i++) {
  const utente = users[i]
  if (utente.isAmbassador === true) {
      console.log(utente.name + " " + utente.lastName + " " + "è un ambassador")
  } else {
    console.log(utente.name + " " + utente.lastName + " " + "NON è un ambassador")
  }
}

// punto 7 degli esercizi descritti sulla piattaforma EPICODE
let ambassadors = []

for (let i = 0; i < users.length; i++) {
  const utente = users[i]
  if(utente.isAmbassador === true) {
    ambassadors.push(utente)
  }   
}
console.log(ambassadors)