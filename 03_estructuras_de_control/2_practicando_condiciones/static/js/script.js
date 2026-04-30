console.log("conexion exitosa con js")

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "juan";
    alert(`bienvenido ${nombre}`)
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let sum1 = 10
    let sum2 = 5
    let resultado = sum1 + sum2
    alert(`El resultado de la suma es: ${resultado}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let res1 = 18
    let res2 = 6
    let resultado2 = res1 - res2
    alert(`El resultadoo de la resta es: ${resultado2}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let mun1 = 8
    let mun2 = 3
    let resultado3 = mun1 * mun2
    alert(`El resultado de la muinltiplicacion es de: ${resultado3}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let pro1 = 5.4
    let pro2 = 6.0
    let sumanot = pro1 + pro2
    let promedio = sumanot / 2
    alert(`El promedio da: ${promedio}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 20;
    if (edad >= 18) {
        alert(`eres mayor de edad`);
    } else {
        alert(`es menor de edad`);
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 21;
    if (numero % 2 == 0) {
        alert(`el numero es par`)
    } else {
        alert(`EL numero es impar`)
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let Nota = 6.5
    if (Nota >= 5.0) 
        alert(`Estudiante aprovado`)
    else {
        alert(`Estudiante desaprovado`)
    }
    };

// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let Precioproducto = 20000
    let descuento = 0.1;
    alert(`precio final con descuento ${(Precioproducto * descuento)}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 10;
    let num2 = 5;
    if (num1 = num2) {
        alert(`El numero mayor es: ${num1}`)
    } else {
        alert(`El numero mayor es: ${num2}`)
    }
}
    function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;
    if (nota >= 6.0) {
        alert(`Excelente rendimiento`);
    } else if (nota >= 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre1 = "Daniel Perez";
    alert(`El nombre convertido es: ${nombre1.toUpperCase()} tiene: ${nombre1.length} letras`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo="ejemplo@gmail.com";
let texto="correo valido";
alert(`El correo convertido es: ${correo} y el resultado es: ${texto.toLowerCase()}`)
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase="Estoy aprendiendo ";
if(frase){
    alert(`la frase ${frase.toLowerCase()} tiene ${frase.length} caracteres y es una frase larga `);
}else if (frase > 21){
    alert(`la frase ${frase} tiene ${frase.length} caracteres y es frase mediana tiene entre 11 y 20 caracteres`);
}else{
    alert(`tiene  ${frase.length} y es frase corta tiene entre 10 o menos caracteres`)
}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let producto = "teclado"
let precio = 50000
let descuento = 0.1
alert(`el producto ${producto.toLocaleUpperCase()} tiene un pecio final $${precio -(precio * descuento)}`)
}
