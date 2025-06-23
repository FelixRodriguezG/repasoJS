/*------------------
1)
Crea una función llamada "triple" que reciba
un parámetro "x" y que retorne el valor de "x"
multiplicado por tres.
------------------*/

function triple(x) {
  // Tu código aquí
}

console.log(triple(5));


/*------------------
2)
Crea una función llamada "subtract" que reciba
2 parámetros y retorne el resultado de restar
el segundo al primero.
------------------*/

function subtract(a, b) {
  // Tu código aquí
}

console.log(subtract(5, 2)); // 3
console.log(subtract(1, 3)); // -2


/*------------------
3)
Crea una función llamada "createArray" que reciba
3 argumentos y retorne un array con los 3.
------------------*/

function createArray(a, b, c) {
  // Tu código aquí
}

console.log(createArray(3, "a", true)); // [3, "a", true]


/*------------------
4)
Crea una función llamada "greetPerson" que reciba
un string como argumento y retorne "Hello, [nombre]!".
Si el argumento no es un string, debe retornar:
"Please provide a name."
------------------*/

function greetPerson(name) {
  // Tu código aquí
}

console.log(greetPerson("Sofia")); // "Hello, Sofia!"
console.log(greetPerson(42)); // "Please provide a name."


/*------------------
5)
Crea una función llamada "addTogether" que reciba un array
numérico y retorne la suma de todos sus elementos.
------------------*/

function addTogether(array) {
  // Tu código aquí
}

console.log(addTogether([1, 2, 3, 4, 5])); // 15


/*------------------
6)
Crea una función llamada "getIndex" que reciba un array
y un valor. Retorna el índice donde se encuentra el valor.
Si no se encuentra, retorna -1.
(No usar indexOf)
------------------*/

function getIndex(array, value) {
  // Tu código aquí
}

console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1


/*------------------
7)
Crea una función llamada "includesValue" que retorne
true si un valor está incluido en un array. Usa "getIndex".
------------------*/

function includesValue(array, value) {
  // Tu código aquí
}

console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false


/*------------------
8)
Crea una función llamada "createObject" que clasifique
los valores de un array según su tipo (number, boolean, string).
------------------*/

function createObject(array) {
  // Tu código aquí
}

console.log(createObject([3, "a", true, false, 2, true]));
// { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }


/*------------------
9)
Crea una función llamada "removeSpaces" que elimine
todos los espacios de un string.
------------------*/

function removeSpaces(string) {
  // Tu código aquí
}

console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"


/*------------------
10)
Crea una función llamada "titleCase" que reciba un string
y devuelva el string con la primera letra de cada palabra
en mayúscula.
------------------*/

function titleCase(string) {
  // Tu código aquí
}

console.log(titleCase("He went to the store.")); // "He Went To The Store"
