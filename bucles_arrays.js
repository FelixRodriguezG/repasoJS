/*------------------
1)
El siguiente código imprime el índice del array "persona".
Modifícalo para que imprima los valores del array.
------------------*/
console.log("Ejercicio 1")
const persona = [ "Sofía", 30, "Barcelona", true ];



/*------------------
2)
Escribe un bucle que imprima todos los valores de "pet".
------------------*/
console.log("Ejercicio 2");
const pet = [ "Spot", 2, "dog", "spotted" ];


/*------------------
3)
Crea un array llamado "features" con al menos cuatro elementos.
Después, imprime todas las features en UN solo string en vez de una por una.
Bonus: añade una coma entre cada feature y termina en punto.
------------------*/
console.log("Ejercicio 3");
let carFeatures = "Las características del coche son: ";
let features = [ ]; // Añade tus elementos aquí

// Bucle para concatenar features

/*------------------
4)
Escribe un bucle que imprima todos los elementos del array "nums"
en orden inverso, es decir, empezando en 10 y terminando en 0.
------------------*/
console.log("Ejercicio 4");
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];



/*------------------
5)
Crea un bucle anidado (nested loop) que imprima los números de "gridNum" en orden.
------------------*/
console.log("Ejercicio 5");
let gridNum = [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ], [ 10 ] ];

// tu código aquí

/*------------------
6)
Escribe un bucle que imprima los nombres de los siguientes Pokémon.
------------------*/
const pokemon = [
  { name: "Bulbasaur", types: ["poison", "grass"] },
  { name: "Ivysaur", types: ["poison", "grass"] },
  { name: "Venusaur", types: ["poison", "grass"] },
  { name: "Charmander", types: ["fire"] },
];

// tu código aquí

/*------------------
7)
Ahora crea un bucle anidado (nested loop) que imprima todos los "types"
de los Pokémon del array.
------------------*/
// tu código aquí

/*------------------
8)
Crea un bucle que imprima las siguientes letras en orden alfabético.
Necesitarás tres bucles anidados. Intenta hacerlo sin mirar las slides.
------------------*/
let letters = [
  [ [ "A" ], [ "B" ], [ "C" ] ],
  [ [ "D" ], [ "E" ], [ "F" ] ],
  [ [ "G" ], [ "H" ], [ "I" ] ],
];

// tu código aquí

/*------------------
9)
Crea un bucle anidado que agregue cada dirección como string al array "allAddress".
No añadas los objetos directamente, sino los valores concatenados en un solo string.
Reemplaza "Carrer de CodeOp" por algo genérico como "Calle de la Escuela".
------------------*/
let allAddress = [];
const addressList = [
  {
    line1: "Calle de la Escuela",
    line2: 42,
    city: "Barcelona",
    country: "España",
  },
  {
    line1: "Calle de Tecnología",
    line2: 200,
    city: "Madrid",
    country: "España",
  },
  {
    line1: "Calle de JSON",
    line2: 22,
    city: "Sevilla",
    country: "España",
  },
];

// tu código aquí

/*------------------
10)
Crea una lista de tareas para cada día de la semana.
Debe imprimirse una frase como:
"Las tareas del lunes son: ordenar, aspirar, platos."
Y si no hay tareas: "Las tareas del martes son: nada."
------------------*/
let daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

let chores = {
  lunes: ["ordenar", "aspirar", "platos"],
  miercoles: ["lavar", "facturas"],
  viernes: ["sacudir", "jardín"],
};

// tu código aquí
