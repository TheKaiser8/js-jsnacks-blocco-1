"use strict";
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const oddContainer = [];

for (let i = 0; i < 6; i++) {
    const number = Number( prompt("Inserisci un numero") );
    if( !(number % 2 === 0 ) ) {
        oddContainer.push(number);
        console.log(oddContainer);
    }
}