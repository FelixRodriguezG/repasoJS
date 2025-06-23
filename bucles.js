/*------------------
1)
En el siguiente bucle, arregla la expresión dentro del "do while"
para que la consola imprima los números del 0 al 10.
------------------*/
let count = 0;

// do {
//   console.log("Ejercicio 1", count);
//   count++;
// } while (count <= 10);

/*------------------
2)
Crea un bucle que cuente del 0 al 100.
------------------*/

// Ejemplo con do while
// Ejemplo con while
// Ejemplo con for

/*------------------
3)
Crea un bucle que cuente de 100 hasta 0.
------------------*/
let count2 = 100;

// for, while o do while

/*------------------
4)
Agrega un console.log dentro del siguiente bucle
para que imprima los números del 0 al 4.
------------------*/

const start = 5;
let end = 0;

// while (start > end) {
//   console.log("Ejercicio 4", end);
//   end++;
// }

/*------------------
5)
Agrega una expresión dentro del ${} que imprima la diferencia
entre la capacidad y el número de personas.
------------------*/

const capacity = 12;

// for (let people = 1; people <= capacity; people++) {
//   console.log(`Hay espacio para ${capacity - people} personas más en el edificio.`);
// }

/*------------------
6)
Imprime todos los números PARES entre 0 y 50.
Agrega un contador de iteraciones e imprímelo al final.
Pista: incrementa de dos en dos.
------------------*/
let contadorIteration = 0;

// Usa for, while o do while

/*------------------
7)
Ahora, crea un bucle "for" que imprima en la consola TODOS
los números del 0 al 50. Usa una condicional:
- Si el número es par: "The number X is even"
- Si es impar: "The number X is odd"
------------------*/

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`The number ${i} is even`);
//   } else {
//     console.log(`The number ${i} is odd`);
//   }
// }

/*------------------
8)
Vamos a probar algo nuevo:
Para seleccionar un carácter dentro de un string usa
.charAt(), y para ponerlo en mayúscula usa .toUpperCase().
Haz que se imprima la frase alternando mayúsculas y minúsculas.
------------------*/

// const sentence = "i am shouting";
// const numberOfChars = sentence.length - 1;
// let result = "";
// let i = 0;

// while (i <= numberOfChars) {
//   let letter = sentence.charAt(i);
//   if (i % 2 === 0) letter = letter.toUpperCase();
//   result += letter;
//   i++;
// }

// console.log(result);

/*------------------
9)
Escribe un programa que imprima del 1 al 100.
Para números divisibles por 3 imprime "Fizz",
por 5 imprime "Buzz" y por ambos "FizzBuzz".
------------------*/

// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) output += "Fizz";
//   if (i % 5 === 0) output += "Buzz";
//   console.log(output || i);
// }

/*------------------
10)
Crea un triángulo usando un bucle que imprima lo siguiente:
*
**
***
****
*****
------------------*/

// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }