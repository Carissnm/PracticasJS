// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
function loopDePares(numero){
    for(let i = 0; i < 101; i++){
        console.log(i);
        if((i + numero)%2 === 0){
            console.log(`El número ${numero + 1} es par`);
        }
        
    }
}

// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
function loopDeImpares(numero, palabra){
    for(let i = 0; i <= 100; i++){
        console.log(i);
        if((numero + i)%2 !== 0){
            console.log(palabra);
        }
    }
}


// Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

function sumattion(num){
    let suma = 0;

    for(let i = 0; i <= num; i++){
        suma += i;
    }
    console.log(suma);
}


// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
function nuevoArreglo(num){
    let arr = [];
    for(let i = 1; i <= num; i++){
        arr.push(i);
    }
    console.log(arr);
}

// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

// Importante: No podés usar el String.split()
function split(str){
    let arrStr = [];
    for(let i = 0; i < str.length; i++){
        arrStr.push(str[i]);
    }

    console.log(arrStr);
}

// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.
function middleCharacter(string){
    let letraMedia = string.length/2;
    let redondeo = Math.floor(letraMedia)
    if(string.length%2 !== 0){
        console.log(string[redondeo]);
    }else{
        console.log("Letras del medio:", string[redondeo - 1] + string[redondeo]);
    }
}


// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

function middleCharacter2(string){
    let letraMedia = string.length/2;
    let redondeo = Math.floor(letraMedia)
    if(string.length%2 !== 0){
        console.log(string[redondeo]);
    }else{
        console.log(string.substring(redondeo-1, redondeo + 1));
    }
    };


    // Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
function moveZeros(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            array.splice(i, 1);
            array.push(0);
        }
    }
    console.log(array)
}


    // Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.
function arrayHandler(array1, array2){
    for(let i = 0; i < array1.length; i++){
        arrayIndex = array1[i];
        arrayIndex2 = array2[i];
        console.log(`Soy ${arrayIndex} y yo soy ${arrayIndex2}`);
    }   
}

// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
function mezclarArreglos(array1, array2){
    let arrayMezclado = [];
    if(array1.length > array2.length){
        for(let i = 0; i < array1.length; i++){
            arrayMezclado.push(array1[i]);
            if(i < array2.length){
                arrayMezclado.push(array2[i]);
            }
        }
    }else if(array1.length < array2.length){
        for(let i = 0; i < array2.length; i++){
            if(i < array1.length){
                arrayMezclado.push(array1[i]);
                arrayMezclado.push(array2[i]);
            }
            arrayMezclado.push(array2[i]);
        }
    }else{
        for(let i = 0; i < array1.length; i++){
            arrayMezclado.push(array1[i]);
            arrayMezclado.push(array2[i]);
        }
    }
    console.log(arrayMezclado);
}


// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

function minSum(array){
    array.sort((a, b) =>  a - b);
    console.log(array[0] + array[1]);
}

// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.
function arregloDeObjetos(numero){
    let objectArray = [];
    for(let i = 1; i <= numero; i++){
        objectArray.push({valor:i});
    }
    console.log(objectArray);
}

// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
function arregloDeObjetos2(numero, palabra){
    let objectArray = [];
    for(let i = 1; i <= numero; i++){
        objectArray.push({[palabra]:i}); 
    };
    console.log(objectArray);
}

// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 
function oneProperty(array, string){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push({[string] : array[i][string]} );
    }
    console.log(newArray)
}

// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).
function warWord(palabra1, palabra2){
    let suma1 = 0;
    let suma2 = 0;
    for(let i = 0; i<palabra1.length; i++){
        suma1 += palabra1.charCodeAt(i);
    }
    for(let i = 0; i<palabra2.length; i++){
        suma2 += palabra2.charCodeAt(i);
    }
        if(suma1 > suma2){
            console.log(palabra1);
        }else if(suma1<suma2){
            console.log(palabra2);
        }else{
            console.log("Ambas palabras valen lo mismo");
        }
}

// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

//     1. Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo : 

// {
// 54: “Argentina”,
// 55: ”Brasil”,
// 56: ”Ecuador”,
// 57: ”Bolivia”
// }
//     2. Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
//     // 3. En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”
function validarPrefijo(numero){
    let prefijos = [54, 55, 56, 57];
    let paises = ["Argentina", "Brasil", "Ecuador", "Bolivia"];
    let codigosPaises = {};

    for(let i = 0; i < prefijos.length; i++){
        codigosPaises[prefijos[i]] = paises[i];
    }
    // console.log(codigosPaises);

    let numStr = numero.toString();
    let suma2Digitos = numStr[0] + numStr[1];
    let sumaEnNumero = parseInt(suma2Digitos);

    if(codigosPaises.hasOwnProperty(sumaEnNumero)){
        console.log(`Este número pertenece a ${codigosPaises[sumaEnNumero]}`);
    }else{
        console.log(`Este número no pertenece a nuestros países`)
    }
}

function validarPrefijoCorta(numero){
    let prefijos = [54, 55, 56, 57];
    let paises = ["Argentina", "Brasil", "Ecuador", "Bolivia"];
    let codigosPaises = {};

    for(let i = 0; i < prefijos.length; i++){
        codigosPaises[prefijos[i]] = paises[i];
    }
    // console.log(codigosPaises);

    let dosDigitos = numero.substr(0,2);

    if(codigosPaises.hasOwnProperty(dosDigitos)){
        console.log(`Este número pertenece a ${codigosPaises[dosDigitos]}`);
    }else{
        console.log(`Este número no pertenece a nuestros países`)
    }
}

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
function reverseKeys(objeto){
    let objetoReverse = {};
    if(Array.isArray(objeto)){
        console.log(`Error, input can't be an Array`);
    }else if(typeof(objeto) === "string"){
        console.log(`Error, input can't be a String`);
    }else if(typeof(objeto) === "number"){
        console.log(`Error, input can't be a Number`)
    }else{
        for(let i = 0; i < Object.keys(objeto).length; i++){
            if(typeof Object.values(objeto)[i] === "string" ){
                objetoReverse[Object.values(objeto)[i]] = Object.keys(objeto)[i];
            }else{
                objetoReverse[Object.keys(objetoReverse)[i]] = Object.keys(objeto)[i];
            }
        }
        console.log(objetoReverse);
        }
}




function keysYvalues(objeto){
    console.log(Object.keys(objeto));
    console.log(Object.values(objeto));
}

// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
function palindromo(palabra){
    palabra.toLowerCase();
    let arr = palabra.split('');
    let arrReverse = arr.reverse();
    
    if(palabra === arrReverse.join("")){
        console.log(true);
    }else{
        console.log(false);
    }
}

// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
function rotar(array, numero){
    for(let i = 0; i < numero; i++){
        array.unshift(array.pop());
    }

    console.log(array);
}   


// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
function contarOvejas(ovejas) {
    let arrayOvejasRojas = [];
    for(let i = 0; i < ovejas.length; i++){
        if((ovejas[i].name.includes('a') || ovejas[i].name.includes('A')) && (ovejas[i].name.includes('n') || ovejas[i].name.includes('N'))){
            if(ovejas[i].color === "rojo"){
                arrayOvejasRojas.push(ovejas[i]);
            } 
            
        }
    }
    return arrayOvejasRojas;
}

// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 

function consecutivosSimilares(string){
    string.toLowerCase();
    let array = string.split('');
    let suma = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i+1]){
            suma += 1;
        }
    }
    console.log(suma);
}

//verificar si un número tiene 3 cifras
function tieneTresCifras(numero){
    let numStr = numero.toString();
    if(numStr.length == 3){
        console.log(true);
    }else{
        console.log(false);
    }
}

//verificar si un número es entero
function esEntero(numero){
    if(Math.floor(numero) === numero){
        return true;
    }else{
        return false;
    }
}

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        arr2.push(Math.max(...arr[i]))
    }
    return arr2;
}

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num){
    return str.length > num ? str.slice(0, num) + '...' : str ;
}

//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.
function booWho(bool) {
    return bool===true||bool===false?true:false;
}

function cortarEspacios(str){
    let strArray = str.split(" ");
    return strArray.join('');
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    let arrSuma = [];
    let arrZero = [];
    let suma1 = 0;
    let suma2 = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] === " " || input[i] === null){
        return arrZero;
        }else if(input[i] > 0){
        suma1 += 1;
        }else{
        suma2 += input[i];
        }
    }
    arrSuma.push(suma1, suma2)
    return arrSuma;
}

function stringClean(str){
    let cleanStr = '';
    for(let i = 0; i < str.length; i++){
        if(isNaN(parseInt(str[i]))){
            cleanStr += str[i];
        }
    }
    cleanStr.trim()
    return cleanStr;
}

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n){
    let str = n.toString();
    let arr = str.split('');
    let finalArr = [];
    if(n>0){
        arr.reverse();
        for(let i = 0; i < arr.length; i++){
            finalArr.push(parseInt(arr[i]));
        }
        return finalArr;
    }else{
        return [0];
    }
}

// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
    let numStr = bin.toString();
    let strArr = numStr.split('');
    strArr.reverse()
    let numArr = [];
    let resultadoDecimal = 0;

    for(let i = 0; i < numStr.length; i++){
        numArr.push((parseInt(strArr[i]))*Math.pow(2, i));
    }
    
    for(let i = 0; i < numArr.length; i++){
        resultadoDecimal+=numArr[i];
    }

    return resultadoDecimal;

}

//forma más fácil de hacer lo anterior:
function binToDec(bin){
    return parseInt(bin,2);
}


// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15;
    let dogYears = 15;
    let arrYears = [];
    
    if(humanYears === 1){
        arrYears.push(humanYears, catYears, dogYears);
        return arrYears;
    }else if(humanYears === 2){
        arrYears.push(humanYears, catYears + 9, dogYears + 9);
        return arrYears;
    }else if(humanYears > 2){
        let newCat = 16 + (humanYears)*4;
        let newDog = 14 + (humanYears)*5;
        arrYears.push(humanYears, newCat, newDog);
        return arrYears;
        
    }
}
//forma más fácil y rápida:
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
function squareOrSquareRoot(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
        newArr.push(Math.sqrt(array[i]));
        }else{
        newArr.push(Math.pow(array[i], 2));
        }
    }
    return newArr;  
}

//forma resumida:
const squareOrSquareRoot2 = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.
function titleCase(str){
    let arrStr = str.split(' ');
    let newStr = '';
    for(let i = 0; i < arrStr.length; i++){   
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1).toLowerCase();
    }
    newStr += arrStr.join(' ');
    return newStr;
}

// Slice and Splice--------------------------------------------------------------------------------
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
    let frankArray = [];
    for(let i = 0; i < n; i++){
        frankArray.push(arr2[i]);
    }
    for(let i = 0; i < arr1.length; i++){
        frankArray.push(arr1[i]);
    }
    for(let i = n ; i < arr2.length; i++){
        frankArray.push(arr2[i]);
    }
    return frankArray;
}

//solución con menos código utilizando SPLICE Y SLICE previamente para clonar arr2
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}


// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

//forma más reducida utilizando filter()
function bouncer2(arr) {
    return arr.filter(Boolean);
}

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    
    return arr.indexOf(num);
}


function mutation(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].toLowerCase();
    }
    return arr;
}

function vowelsAndConsonants(s) {
    let arrV = [];
    let arrC = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
            console.log(s[i]);
        }
    }
    for(let i = 0; i < s.length; i++){
        if(s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u'){
            console.log(s[i]);
        }
    }
}

//calcular el factorial 1 <= n <= 10
function factorial(n){
    let f = 1;
    if(1 <= n && n <= 10){
        for(let i = n; i > 0; i--){
            f*=i;
        }
        return f; 
    }else{
        return 'El numero es incorrecto';
    }    
}

//devolver el segundo número más grande de un arreglo de números enteros.
function getSecondLargest(nums) {
    const max = Math.max(...nums);
    nums = nums.filter(num => num !== max);
    return Math.max(...nums);
}

function reverseString(s) {
    if(typeof s !== "string"){
        console.log("s.split is not a function");
    }else{
        return s.split('').reverse().join('');
    }
    
}

function isPositive(a) {
    let arr = a.toString().split('');
    console.log(arr)
    for(let i = 0; i < arr.length; i++ ){
        if(parseInt(arr[i]) > 0){
            return "YES";
        }else if(parseInt(arr[i]) === 0){
            return "Zero Error";
        }else{
            return "Negative Error";
        }
    }
}

//recorrer objetos
const notas = {
    zoa: 5,
    ulises: 7,
    nico: 5,
    erick: 8,
    laura: 10,
};

function promedio(notas){
    let array = Object.values(notas);
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma+=array[i];
    }
    return suma/array.length;
}

function promedioForOf(notas){
    let array = Object.values(notas);
    let suma = 0;
    for(estudiante of array){
        suma+=estudiante;
    }
    return suma/array.length;
}


//funciones superiores
function fabricaDeFunciones(min, max){
    return function (num){
        return num >=min && num <= max;
    }
}

//función que crea un objeto Rectángulo:
function Rectangle(a, b) {
    const obj = {
        length: a,
        width: b,
        perimeter: 2*(a + b),
        area: a*b
    };
    
    return obj;
}

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .
function getCount(objects) {
    let contador = 0;
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y){
            contador++
        }
    }
    return contador
}

// ------------------ CODEWARS -----------------------

function between(a, b) {
    var numbers = [];
        for (var i = a; i <= b; i++) {
        numbers.push(i);
        }
    return numbers;
}

// -------------------- NUMEN --------------------- //

// const titulos = peliculas.map((pelicula) => pelicula.titulo + " - " + pelicula.puntuacion + "/100");

// const palabras = ["lol", "doggqfq", "asd"];
// const todasPalabras = palabras.every((palabra) => {
//     return palabra.length === 3;
// });

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
    const nuevoArray = array.filter(valor => valor >= 100)

    return nuevoArray;
}



// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// function sameCase1(a, b){
//     if(typeof a !== "string" || typeof b !== "string"){
//         return -1;
//     }else if( !(/[a-zA-Z]/i).test(a) || !(/[a-zA-Z]/i).test(b)){
//         return -1;        
//     }else if(a == a.toUpperCase() && b == b.toUpperCase()){
//         return 1;
//     }else if(a == a.toLowerCase() && b == b.toLowerCase()){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// function sameCase2(a, b){
//     if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//         return -1
//     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//         return 1
//     }else{
//         return 0
//     }
// }

// const sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1

//turn a number into a string
function numberToString(num) {
    return num.toString();
}

function numberToString2(num) {
    // Return a string of the number here!
    return String(num);
}

const numberToString3 = num => `${num}`;

function numberToString4(num) {
    return ''+num;
}

//turn a str tu uppercase
const toUpperCase = (str) => str.toUpperCase();

// check if any element from an array contains a given value
const check = (a,x) => a.includes(x);
function check2(a,x){
    return a.indexOf(x) > -1 ? true : false;
};
const check3 = (arr, x) => arr.some(item => item == x);


//función que tome un string y devuelva las iniciales de las palabras en mayúscula 
function abbrevName(name){
    const nombre = name.toUpperCase();
        
    let array = nombre.split(' ');
    return array[0][0] + "." + array[1][0];
}

function abbrevName2(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// función que invierta el signo de los elementos de un array
function invert(array) {
    return array.map( value => value *= -1 );
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
    const suma = classPoints.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    });
    
    return yourPoints > suma/classPoints.length;
}

//Create a function which translates a given DNA string into RNA.
//For example:
//"GCAT"  =>  "GCAU"
function DNAtoRNA(dna) {
    const arr = dna.split('');
    const newArr = arr.map((item) => (item === "T") ? item.replace("T", "U"):item)
    
    return newArr.join('');
}

const DNAtoRNA2 = dna => dna.replace(/T/g, 'U');

function DNAtoRNA3(dna) {
    return dna.split("T").join("U");
}