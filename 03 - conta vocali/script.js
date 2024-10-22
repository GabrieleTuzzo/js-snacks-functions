/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels (string) {
    let counter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < string.length; i++) {
        const letter = word.charAt(i)

        // if(vowels.includes(letter)) {counter++}

        for (let j = 0; j < vowels.length; j++) {
            if (letter.toLowerCase() === vowels[j]) {
                counter++
            }
        }
    }

    return counter
}

// Invoca la funzione qui e stampa il risultato in console
const vowelsNumber = countVowels(word)

console.log(vowelsNumber)
//Risultato atteso se si passa 'javascript': 3 (a, a, i)