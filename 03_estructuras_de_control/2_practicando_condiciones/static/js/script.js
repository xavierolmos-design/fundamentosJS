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
// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado
function calcularNotas(){
    let nombre = "Papelucho";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 6.7;
    let promedio = (n1 + n2 + n3) /3;
    let nombreMayusculas = nombre.toUpperCase();
    if(promedio >= 6){
        alert(`El estudiante ${nombreMayusculas} esta Destacado 
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    } else if(promedio >=4){
    alert(`El estudiante ${nombreMayusculas} esta aprobado 
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    } else{
        alert(`El estudiante ${nombreMayusculas} esta reprobado
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    }
}
// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

function ejercicio19(){
    let nombre = "Rubius";
    let n1 = 6.7;
    let n2 = 6.5;
    let n3 = 7.0;
    let promedio = (n1 + n2 + n3) /3;
    let nombreMayusculas = nombre.toUpperCase();
    if(promedio >= 6.5){
        alert(`El estudiante ${nombreMayusculas} esta sobresaliente
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    } else if(promedio >= 6.0){
    alert(`El estudiante ${nombreMayusculas} tuvo muy buen rendimiento 
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
            } else if(promedio >= 5.0){
    alert(`El estudiante ${nombreMayusculas} tuvo buen rendimiento
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
            } else if(promedio >= 4.0){
    alert(`El estudiante ${nombreMayusculas} esta aprobado
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    } else{
        alert(`El estudiante ${nombreMayusculas} esta reprobado
            \nPromedio: ${promedio}, 
            \nLargo nombre ${nombre.length}`)
    }
}
// Además:

// Mostrar la cantidad de caracteres del nombre

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta