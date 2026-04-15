console.log("Conexion con JS correcta...")
/*
Dato: Tipo texto(string)
Concatenacion de texto con el signo +
podemos unir texto y variables 
*/
//Concatenacion: Unir texto y/o variables.
const nombre = "Xavier"
const apellido = "Olmos"
//Unimos ambas constatantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido)

/*
2.- Ver tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Template literals (Forma moderna para concatenar ``)
console.log(`hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar un largo de un string(texto) - Contar los caracteres
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras`)

//Crear una frase y contar sus caracteres
let frase = "Los voy a matar ting"
console.log(` La frase ${frase} tiene ${frase.length} letras`)

// Metodos comunes en JS para formatear texto
// Transformar texto en mayúsculas .toUpperCase
let texto1 = "JAVasCriPT eS lO MeJor"
console.log(texto1.toUpperCase())

//Transformar texto a minusculas .toLowerCase()
console.log(texto1.toLowerCase())

// Buscar un texto dentro de un srting .includes()
let texto2 = "Leche, azucar, peras, huevos, harina"
console.log(texto2.includes("peras")); //true

//Convertir una variable a texto
let telefono = 89192926;
let telefono_texto = String(telefono)
console.log(` Mi numero de telefono ${telefono_texto} es de tipo ${typeof telefono_texto}`)