/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getFirstLetter(array) {
    const outputArray = []

    for(let i = 0; i < array.length; i++) {
        const letter = array[i].charAt(0)
        outputArray.push(letter)
    }

    return outputArray
}

// Invoca la funzione qui e stampa il risultato in console
const initialsArray = getFirstLetter(names)

console.log(initialsArray)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]