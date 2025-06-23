/** Función auxiliar para numerar los ejercicios */
function problemNumber(number) {
  const problem = "\n%cProblema %d:";
  const cssRules = "color: blue; font-weight: bold";
  console.log(problem, cssRules, number);
}

// Tu ejercicio empieza aquí:

/*
1)
Completa este código para que "getDrink" sea "true"
cuando "thirsty" sea "true", y que "getDrink" sea
"false" cuando "thirsty" sea "false".

Pista para probar tu código:
console.log(thirsty, " debe ser igual a ", getDrink);
*/
problemNumber(1);
const thirsty = true;
let getDrink = null;

// Escribe aquí tu condición


/*
2)
Cambia la variable "light" a "red", luego "green",
luego "yellow" y comprueba lo que se imprime. Ahora cambia
la variable a "purple". ¿Qué sucede?
Modifica el código para que solo "green" diga "Go.",
"red" diga "Stop!" y "yellow" diga "Wait...".
Con tus modificaciones, cuando se introduzca cualquier
otra palabra, debe decir "Light malfunction".

Pista para probar:
console.log("El semáforo está en ", light, ", así que el coche debe ", driveCar);
*/
problemNumber(2);
const light = "purple";
let driveCar = null;

// Escribe tu estructura condicional aquí


/*
3)
Escribe el código para la siguiente situación:
Si la temperatura baja de 15 grados,
la persona debería ponerse un jersey.
*/
problemNumber(3);
let temperature = 14;

// Escribe tu condición aquí


/*
4)
Define un número y comprueba si es par o impar.
*/
problemNumber(4);
let number = 3;

// Escribe tu condición aquí


/*
5)
Escribe el código para la siguiente situación:
Si la persona es vegana, sus restricciones
alimentarias son "no carne ni lácteos".
Si la persona es vegetariana, sus restricciones
son "no carne".
Si no es ninguna de las anteriores,
no tiene restricciones alimentarias (null).
*/
problemNumber(5);

let noDairy = false;
let noMeat = false;

// Escribe aquí tu condición con if/else


/*
6)
Depura el siguiente código.
Necesitarás cambiar los valores de "x",
"y" y "z" para encontrar el error.

Salida esperada:
console.log(answer);
*/
problemNumber(6);

const x = 1;
const y = 1;
const z = 1;
let answer = null;

// Escribe aquí tu lógica condicional


/*
7)
¡Completa este código!
Elimina el "true" de la condición
y usa las variables "eatsMeat" y "eatsDairy"
junto con el operador "&&".

Salida:
console.log(diet);
*/
problemNumber(7);

const eatsMeat = false;
const eatsDairy = false;
let diet = null;

// Escribe tu lógica aquí


/*
8)
Escribe el código para esta situación:
Sofía sabe conducir coches manuales.
Diego solo sabe conducir automáticos.
Sofía prefiere conducir largas distancias (> 10 km).
Diego prefiere distancias cortas.

Salida:
console.log("El coche es ", car, " y la distancia es ", distance, "km, así que el conductor es: ", driver);
*/
problemNumber(8);

const car = "manual";
let driver = null;
const distance = 10;

// Escribe tu lógica aquí


/*
9)
¡Completa este código!
Actualiza "canVote" según:
- "No es un número" si la edad no es un número
(usa "typeof" para comprobarlo - revisa MDN)
- "Puede votar" si tiene al menos 18 años
- "Demasiado joven" si es menor de 18

Salida:
console.log(canVote);
*/
problemNumber(9);

const age = 16;
let canVote = null;

// Escribe tu condición aquí


/*
10)
Elimina los "if" anidados del siguiente código,
usando el orden de condiciones adecuado.
También añade la condición para que la temperatura
entre 15 y 30 grados sea "templado".

Salida:
console.log("La temperatura es ", temp, ", así que el clima es ", weather);
*/
problemNumber(10);

let temp;
temp = 11;
let weather = null;

// Escribe tu lógica optimizada aquí


/*
11)
Descomenta todo tu código anterior.
- Reescribe el problema 3 y 4 usando operadores ternarios.
- Reescribe también el problema 9 usando operadores ternarios.
Hazlo para dos situaciones:
  a) Puedes asumir que "age" es un número, no hace falta verificar.
  b) Comprueba el tipo de "age" como en el ejercicio original.
     En este caso necesitarás encadenar dos ternarios.
¿Cuál crees que es el código más limpio?
*/
problemNumber(11);

// Reescribe aquí el problema 3 con operador ternario

// Reescribe aquí el problema 4 con operador ternario

// Reescribe aquí el problema 9 sin comprobar el tipo (versión a)

// Reescribe aquí el problema 9 comprobando el tipo (versión b)
