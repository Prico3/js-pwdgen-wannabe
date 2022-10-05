// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21.


// Input: chiedere nome, cognome e colore preferito.

const firstName = prompt("Qual è il tuo nome?");
console.log(firstName);

const secondName = prompt("Qual è il tuo cognome?");
console.log(secondName);

const favouriteColor = prompt("Qual è il tuo colore preferito?");
console.log(favouriteColor);

// Elaborazione: comporre la password
const password = `${firstName}${secondName}${favouriteColor}21`;
console.log(password);

// Output: inserimento dati + password generata
document.getElementById("firstName").innerHTML = firstName;

document.getElementById("secondName").innerHTML = secondName;

document.getElementById("favouriteColor").innerHTML = favouriteColor;

document.getElementById("password").innerHTML = password;







