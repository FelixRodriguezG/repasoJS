/*------------------
1)
El siguiente bucle imprime las claves del objeto "person".
Modifícalo para que imprima los valores. 
------------------*/
console.log("Ejercicio 1");
const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true,
};

for (let features in person) {
  // console.log(person[features]);
}

/*------------------
2)
Escribe un bucle que imprima todos los valores de "pet".
------------------*/
console.log("Ejercicio 2");

const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
};



/*------------------
3)
Agrega al menos CUATRO propiedades (features) al objeto "car".
Luego crea un bucle que imprima los valores del objeto "car" en consola.
------------------*/
console.log("Ejercicio 3");

const car = {
  // agrega tus propiedades aquí
};



/*------------------
4)
Ahora imprime todas las propiedades (features) del objeto "car" del ejercicio anterior en UN solo string.
Usa un bucle para agregar cada valor a la cadena "carFeatures".

Bonus #1: agrega una coma entre cada feature.
Bonus #2: asegúrate de que la frase termine con punto.
------------------*/
console.log("Ejercicio 4")

let carFeatures = "";

// tu código aquí

/*------------------
5)
Crea un bucle que agregue cada valor del objeto "address"
a la cadena "fullAddress".

Debe imprimir: "Calle de la Escuela, 42, Barcelona, España."
------------------*/
console.log("Ejercicio 5")
const address = {
  line1: "Calle de la Escuela",
  line2: 42,
  city: "Barcelona",
  country: "España",
};

let fullAddress = "";

// tu código aquí

/*------------------
6)
Escribe un bucle que actualice todos los valores del objeto "address"
que sean strings a mayúsculas.

El resultado debería ser: "CALLE DE LA ESCUELA 42 BARCELONA ESPAÑA".
Usa un bucle y "typeof" junto con ".toUpperCase()".
------------------*/
console.log("Ejercicio 6")

let newFullAddress = "";

// tu código aquí

/*------------------
7)
Escribe un bucle que agregue un año a las edades de todas las personas.
Debe imprimir: {
  pedro: 31,
  sofia: 39,
  mia: 41,
  lucy: 28,
}
------------------*/
console.log("Ejercicio 7")

const friendsAges = {
  pedro: 30,
  sofia: 38,
  mia: 40,
  lucy: 27,
};

// tu código aquí

/*------------------
8)
Haz lo mismo que en el ejercicio anterior, pero ahora accediendo
al valor "age" de cada objeto dentro del objeto "groupOfFriends".
------------------*/
console.log("Ejercicio 8")

const groupOfFriends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40,
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27,
  },
};

// tu código aquí

/*------------------
9)
¿Quiénes son amistades del trabajo y quiénes del colegio?
Crea un bucle que introduzca los nombres en el string correspondiente.
------------------*/

let workFriends = "";
let schoolFriends = "";

// tu código aquí

console.log(
  `Los amigos del trabajo son: ${workFriends} y los del colegio son: ${schoolFriends}.`
);

/*------------------
10)
Recorre el objeto "chores" y añade cada tarea del hogar al string del día correspondiente.

Al final, imprime "mondayChores" y "wednesdayChores".
Ejemplo: "Las tareas del lunes son: ordenar, aspirar, facturas."
------------------*/

let chores = {
  tidying: "Monday",
  vaccuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
};

let mondayChores = "";
let wednesdayChores = "";

// tu código aquí

console.log(`Las tareas del lunes son: ${mondayChores}.`);
console.log(`Las tareas del miércoles son: ${wednesdayChores}.`);