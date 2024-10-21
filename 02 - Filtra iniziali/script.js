/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findByFirstLetter(array, letter) {
    outputArray = []

    for(let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter) {
            outputArray.push(array[i])
        }
    }

    return outputArray
}

// Invoca la funzione qui e stampa il risultato in console
const wordsWithA = findByFirstLetter(names, 'A')

console.log(wordsWithA)
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]