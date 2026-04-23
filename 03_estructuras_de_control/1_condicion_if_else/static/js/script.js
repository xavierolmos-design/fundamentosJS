console.log("Conexion con JS correcta...")

/*
==========================
¿Que es una condición en JS
==========================
Una condicion nos permite tomar decisiones en el código.
separando dos caminos el si(if) y el no(else).

Estructura basica:( Sintáxis --> reglas del lenguaje de programacion)

if (condicion) {
 //código que s eejecuta si la condicion es verdadera.
}
else {
    //Codigo se ejecuta si la condicion es falsa.
}

*/

//ejemplo 1: (numerico)
let edad = 18;

if(edad >= 18){
    console.log("Eres mayor de edad");
}

//ejemplo 2: Dos caminos posibles

let temperatura = 10;
if(temperatura < 20){ //Condicion SI
    console.log("hace calor")
    }
else { //Condicion NO
    console.log("hace frio")
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples Condiciones)

let nota = 5.5;

if(nota >= 6.0){
    console.log("exelente");
}
else if (nota >= 4.0){
    console.log("aprovado");
}
else {
    console.log("desaprovado");
};
//Ejemplo 4: Condiciones con string
let nombre = "friendzone"

//Comparacion exacta (===)
if (nombre === "friendzone"){
    console.log("Hola," + nombre);
} else {
    console.log("tu no eres frienzone");
};

/*
Operaciones de comparacion

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/

//Ejemplo distinto

let num = 10;
let num2 = 5
if(num !== 5){
    console.log(`El numero: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales")
}