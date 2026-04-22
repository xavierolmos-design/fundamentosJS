console.log("Conexion con JS correcta...")
// 📌 Ejercicios
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.
function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad} \nEn 5 años tendre: ${edad + 5} \nHace 10 años tenia: ${edad - 10}`)
};
// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado
function compraDescuento(){
    let precio = 25000;
    alert(`El precio es de : ${precio} \nEl precio con descuento es de: ${precio - (precio * 0.20)}`)
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()
function promedioNotas(){
    let notita = 2.4
    let nota = 3.6
    let notota = 6.3
    alert(`La nota que sacaron los alumnos fue de: ${notita}, ${nota}, ${notota} 
        \nel promedio es de: ${(notita + nota + notota) / 3}
        \nredondeado seria: ${Math.round(notita + nota + notota) / 3}`)
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final
function calcularTemperatura(){
    let temperatura = 12;
    alert(`La temperatura es de: ${temperatura}
        \nLa temperatura mas 3 seria: ${temperatura + 3}
        \nY la temperatura menos 5 es: ${temperatura - 5}`)
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo
function calculaSueldo(){
    let sueldo = 8000;
    let horas = 45;
    alert(`Su sueldo es de 8000 por hora en 45 horas es de: ${sueldo * horas}
        \nEl sueldo que tendria despues de 5 horas extra seria de: ${(horas + 5) *sueldo}`)
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function division_resta(){
    let num1 = 6
    let num2 = 4
    alert(`El resultado de la division es de: ${num1 / num2}
        \nY el resto es de: ${num1 % num2}
        \nEl resultado se dio gracias a que se dividio: 6 y 4 y luego se saco el resto`)
    };
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function Comp_Num(){
    let num3 = 10;
    let num4 = 3;
    alert(`Numero 3 es mayor a numero 4: ${num3 > num4}
        \nEl numero 3 es igual a 10: ${num3 === 10}`)
};

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function Notación_cientifica(){
    let poblacion = 1e8
    alert(`La cantidad de poblacion se dividira en 4 grupos que es: ${poblacion / 4}`)
};

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function Potencia_Calculo(){
let num5 = 3
let num6 = 4
alert(`3 elevado a 4 es igual a: ${3**4}
    \nMultiplicado por 2: ${(3**4)*2}
    \nY restado en 10 es: ${(3**4*2)-10}`)
};
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function dado(){
let dado = Math.floor(Math.random()*6) + 1; //1 al 6
alert(`Tirar dados: ${dado}
    \nSi el numero es mayor a 4 o igual : ${dado >=  4}`)
}
