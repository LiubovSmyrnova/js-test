function logFunction () {
    console.log ("This is a function!")
}
logFunction ();

function describeSelf (name, age, favouriteFood) {
const personsinfo = `My name is ${name} and I'm ${age} years old. My favourite food is ${favouriteFood}.`
return personsinfo;
}
describeSelf (anna, 30, pizza);
const infoAnna = describeSelf (Anna, 30, pizza);


//describeSelf (Gustav, 28, pasta);
//const infoGustav = describeSelf (Gustav, 28, pasta);
//describeSelf (Lena, 59, tiramisu);
//const infoLena = (Lena, 59, tiramisu);

console.log (infoAnna);
//console.log (infoGustav);
//console.log (infoLena);

