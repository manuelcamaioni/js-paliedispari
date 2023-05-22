//* Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
//* Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1 - Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2 - Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

const insertedWord = prompt('Inserisci una parola o una frase.');

function palindromeCheck(string){
    const re = /[\W_]/g; // variabile che rimuove dalla stringa tutti i caratteri non alfanumerici da a a z / da A a Z/ da 0 a 9
    const lowRegStr = string.toLowerCase().replace(re, ''); //creazione di un'altra variabile per inserire la stringa in lowercase e sostituire i caratteri speciali con ''
    const reverseStr = lowRegStr.split('').reverse().join(''); // in un'altra variabile si splitta ogni carattere e si crea un array, si capovolgel'ordine e si riunisce il tutto in un unica stringa
    return reverseStr === lowRegStr; //la funzione controlla se la variabile con la stringa invertita equivale a quella normale e restituisce un valore booleano 
  }


console.log(insertedWord);
console.log(palindromeCheck(insertedWord));




