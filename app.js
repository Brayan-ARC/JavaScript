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

let nulo=null;

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

console.log(typeof(estado));
console.log(typeof(direccion));
console.log(typeof(numero3));
console.log(typeof(nulo));
//Comillas invertidas Alt+96=`

//Ingreso de datos por el usuario

let nu1= parseInt(prompt(("Ingrese el primer valor")));
let nu2= parseInt(prompt(("Ingrese el segundo valor")));

let s= nu1+nu2;

console.log(`EL PRIMER VALOR INGRESADO ES: ${nu1} Y EL SEGUNDO VALOR ES: ${nu2}`);
console.log(`LA SUMA: ${s}`);


//Generación de numeros aleatorios
//Numero aleatorio entre 1 - 5

//Forma 1
let alea= Math.floor(Math.random()*50)+1;

console.log(alea);

//Forma 2
//Genera un aleatorio entre 0 y 99
let alea1= Math.floor(Math.random()*100);
console.log(alea1);

//Estructura del IF

let edad= 15;

if(edad >=18){
    console.log("ES MAYOR DE EDAD");
}else{
    console.log("ES MENOR DE EDAD");
}

//Ejercicio 2

let calificacion;

calificacion= parseFloat(prompt("Ingrese calificación"));

if(calificacion<3.0){
    console.log("REPROBO");
}else if(calificacion >3.1 && calificacion<=4.0){
    console.log("APROBO");
}else{
    console.log("MUY BUEN TRABAJO");
}

/**&&= SE UMPLEN LAS 2 CONDICIONES
||= SE CUMPLE SOLO 1 CONDICION
*/


//Ejercicio de Generaciones
let nacimiento;

nacimiento=parseInt(prompt("Ingresa tu año de nacimiento"));

if(nacimiento>=1883 && nacimiento<=1900){
    console.log("GENERACIÓN PERDIDA");
}else if(nacimiento>=1901 && nacimiento<=1924){
    console.log("GENERACIÓN GRANDIOSA");
}else if(nacimiento>=1925 && nacimiento<=1945){
    console.log("GENERACIÓN SILENCIOSA");
}else if(nacimiento>=1946 && nacimiento<=1964){
    console.log("GENERACIÓN BABY BOOMER");
}else if(nacimiento>=1965 && nacimiento<=1980){
    console.log("GENERACIÓN X");
}else if(nacimiento>=1981 && nacimiento<=1996){
    console.log("GENERACIÓN Y");
}else if(nacimiento>=1997 && nacimiento<=2012){
    console.log("GENERACIÓN Z");
}else if(nacimiento>=2013 && nacimiento<=2025){
    console.log("GENERACIÓN ALPHA");
}else{
    console.log("NO CORRESPONDE...");
}