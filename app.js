// Comentario una linea

/**
 * Comentario Multilinea
 */

console.log("Hola Mundo");

// Variables

let numero1=45;
let numero2=39;
let suma, resta, multiplicacion;

const pi=1.14156;

let estado=true;

let numero3=78;

numero3=125;


console.log(numero1)
console.log(numero2)
console.log(pi)
console.log(estado)
console.log(numero3)

suma=numero1+numero2;
resta=numero1-numero2;
multiplicacion=numero1*numero2;

console.log(suma)


//Concatenar valores

console.log("EL PRIMER VALOR ES: "+numero1);
console.log("EL SEGUNDO VALOR ES: "+numero2);
console.log("LA SUMA DE "+numero1+" Y "+numero2+" ES: "+suma);
console.log("LA SUMA DE ",numero1," Y ",numero2," ES: ",suma);

//Literal Template
console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`)
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`)
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`)
//Comillas invertidas Alt+96=`