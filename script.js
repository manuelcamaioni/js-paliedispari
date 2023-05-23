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

function reverse(string){
    let reversedWord = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversedWord += string[i];
    }
    return reversedWord;
}

function palindromeCheck(word1, word2){
    if(word1.toLowerCase() == word2.toLowerCase()){
        return true;
    }
    return false;
}


console.log(reverse(insertedWord));
console.log(palindromeCheck(insertedWord, reverse(insertedWord)));

// PARI E DISPARI

const insertedNum = parseInt(prompt('Inserisci un numero da 1 a 5.'));
let pickOddEven = prompt('Scegli pari o dispari');
let genNum;

while (insertedNum < 1 || insertedNum > 5 || isNaN(insertedNum)){
    insertedNum = parseInt(prompt('Inserisci un numero da 1 a 5.'));
}

while (pickOddEven !== 'pari' && pickOddEven !== 'dispari'){
    pickOddEven = prompt('Scegli pari o dispari.');
}

genNum = randomNumber(genNum);

const sum = insertedNum + genNum;
console.log(`Totale: ${sum} ${checkOddEven(sum, pickOddEven)}`);

/**
 * Generates a random number
 * 
 * @param number // parameter used to generate a random number
 * @returns // returns a random number between 1 and 5 included.
 */
function randomNumber(number){
    number = Math.floor(Math.random() * 5 + 1);
    return number;
}

/**
 * Check if the sum is odd or even and declare a winner
 * 
 * @param totalSum // parameter used to check if the sum is odd or even
 * @returns // return a string that checks if the sum is odd or even
 */

function checkOddEven(totalSum, userPick){
    if(totalSum % 2 === 0 && userPick === 'pari'){
        return 'Hai scelto pari, hai vinto!';
    } else if(totalSum % 2 === 0 && userPick === 'dispari'){
        return 'Hai scelto dispari. Hai perso';
    } else if(totalSum % 2 !== 0 && userPick === 'pari'){
        return 'Hai scelto pari. Hai perso.';
    } else if(totalSum % 2 !== 0 && userPick === 'dispari'){
        return 'Hai scelto dispari, hai vinto!';
    }

}

