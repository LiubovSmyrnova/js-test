function logFunction () {
    console.log ("This is a function!")
}
//define the function
logFunction ();
//calling for the function to execute

function describeSelf (name, age, favouriteFood) {
const personsinfo = `My name is ${name} and I'm ${age} years old. My favourite food is ${favouriteFood}.`
return personsinfo;
}

const infoAnna = describeSelf ("Anna", 30, "pizza");

const infoGustav = describeSelf ("Gustav", 28,"pasta");

const infoLena = describeSelf ("Lena", 59, "tiramisu");

console.log (infoAnna);
console.log (infoGustav);
console.log (infoLena);

