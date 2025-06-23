/*------------------
1)
Crea una función llamada "forEach" que reciba
dos parámetros: un array y una función callback.

La función "forEach" debe aplicar la función callback
a cada elemento del array.
------------------*/

function forEach(arr, cb) {
  // Tu código aquí
}

// Test case
console.log("Ejercicio 1");
forEach(["a", "b", "c"], e => { console.log(e); });


/*------------------
2)
Crea una función llamada "map" que reciba
dos parámetros: un array y una función callback.

La función "map" debe retornar un nuevo array. Cada
nuevo elemento será el resultado de aplicar la callback
al elemento correspondiente del array original.
------------------*/

function map(arr, cb) {
  // Tu código aquí
}

// Test case
console.log("Ejercicio 2");
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]


/*------------------
3)
Crea una función llamada "filter" que reciba
dos parámetros: un array y una función callback.

La función "filter" debe retornar un nuevo array
que incluya solo los elementos que pasen la verificación
de la función callback.
------------------*/

function filter(arr, cb) {
  // Tu código aquí
}

// Test case
console.log("Ejercicio 3");
console.log(filter([5, 6, 7, 8], e => e % 2 === 0)); // [6, 8]


/*------------------
4)
Crea una función llamada "every" que reciba
dos parámetros: un array y una función callback.

La función "every" debe retornar true si TODOS los
elementos del array pasan la verificación de la callback.
De lo contrario, retorna false.
------------------*/

function every(arr, cb) {
  // Tu código aquí
}

// Test cases
console.log("Ejercicio 4");
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false


/*------------------
5)
Usa el método nativo "forEach" para sumar todos los
números de un array.
------------------*/

console.log("Ejercicio 5");
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

// Tu código aquí

console.log(sum); // 36
