// let number = 30;

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("fizzbuzz");
// } else if (number % 3 === 0) {
//   console.log("fizz");
// } else if (number % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log(number);
// }; 

//Correction Jérémy
let nombre = 30;

let resultat ="le resultat est ";

if (nombre % 3 === 0){
    resultat = resultat + "fizz";
}

if (nombre % 5 === 0){
    resultat = resultat + "buzz";
}

if (nombre % 5 != 0 && nombre % 3 != 0) {
    resultat = resultat + nombre
}

console.log(resultat);