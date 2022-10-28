"use strict";

// Crea un array di numeri interi e fai la somma di tutti gli elementi 
// che sono in indice dispari

const numbers = [ 2, 5, 6, 3, 9 ];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if( i % 2 !== 0 ) {
        console.log(numbers[i]);
        sum = sum + numbers[i];
    }
}
console.log(sum);


