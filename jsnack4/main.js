// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guests = [ "Aldo", "Giovanni", "Giacomo" ];
const yourName = prompt ("Inserisci il tuo nome");

let present = false;

for (let i = 0; i < guests.length; i++) {
    // console.log( yourName, guests[i]);
    // console.log( yourName === guests[i] );
    if ( yourName === guests[i] ) {
        present = true;
        break;
    }
}

if (present) {
    alert("Puoi partecipare alla festa!");
} else {
    alert("NON Puoi partecipare alla festa!");
}