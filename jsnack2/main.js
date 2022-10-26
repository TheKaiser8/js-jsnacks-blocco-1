// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Inserisci una parola");
console.log(word1);
const word2 = prompt("Inserisci un'altra parola");
console.log(word2);

if ( word1.length > word2.length ) {
    console.log(word1, word2);
} else if ( word1.length < word2.length ) {
    console.log(word2, word1);
} else {
    console.log("Le parole hanno lo stesso numero di lettere");
}
