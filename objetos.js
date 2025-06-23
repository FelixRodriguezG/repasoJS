/*------------------
1)
Completa el objeto de abajo.
¡Agrégale 3 pares de clave/valor!
------------------*/
const person = {
  // Escribe aquí las claves y valores
};

console.log(person);

/*------------------
2)
Accede al valor "name" del objeto "person".
Pista: puedes usar la notación de punto o corchetes.
------------------*/

// console.log("El nombre de la persona es:", );

/*------------------
3)
Actualiza el "name" de "person" a "Marco".
No cambies el objeto original, solo
reasigna el valor de "name". Si lo haces bien,
la siguiente línea imprimirá "true".
------------------*/

// person.name = ;

// console.log("El nombre de la persona se ha actualizado:", (person.name === "Marco"));

/*------------------
4)
Arregla el siguiente código para que imprima
lo esperado.
------------------*/

const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description:
    "JavaScript está en el corazón de casi todas las aplicaciones web modernas, desde redes sociales hasta los juegos más nuevos basados en navegador.",
  website: "http://eloquentjavascript.net/",
};

// console.log("El libro ", , " fue escrito por ", , " y tiene ", , " páginas.");

/*------------------
5)
¡Es hora de aprender algo nuevo! Hay una nueva forma
de escribir cadenas de texto: los "template literals".
1) Encierra todo entre comillas invertidas: ``
2) Si en algún punto quieres insertar JavaScript (como una variable),
usa el símbolo de dólar y llaves: ${}
3) El resto se entiende como texto normal.
Más info:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Rellena la instrucción de abajo.
------------------*/

// console.log(`El libro ${} fue escrito por ${} y tiene ${} páginas.`);

/*------------------
6)
Corrige el siguiente código para que imprima
lo esperado. Puedes usar notación de punto
o notación de corchetes. Revisa las diapositivas
si no recuerdas cómo acceder a valores en objetos anidados.
------------------*/

const user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofía",
    address: {
      line1: "Calle de la Escuela",
      line2: "42",
      city: "Barcelona",
      country: "España",
    },
  },
};

// console.log(`${} vive en ${} ${}, ${}, ${}.`);

/*------------------
7)
Actualiza el email y la ciudad del usuario
para que el console.log imprima "true".

El nuevo email debe ser "sofia@prod.com"
y la nueva ciudad debe ser "Madrid".
------------------*/

// user.email = ;
// user.personalInfo.address.city = ;

// console.log("Datos actualizados correctamente:", (user.email === "sofia@prod.com") && (user.personalInfo.address.city === "Madrid"));

/*------------------
8)
Crea un nuevo objeto desde cero llamado "animal".
Después, elige un animal y descríbelo: color, tipo,
alimentación, etc. Incluye al menos un objeto anidado.
------------------*/

const animal = {
  // Escribe aquí tus propiedades
};

// console.log(animal);

/*------------------
9)
Actualiza al menos un valor de tu objeto.
Escribe tus propios console.log para verificar
los cambios (puedes inspirarte en las preguntas 3 y 6).
------------------*/

// animal.tipo = ;
// console.log();

// animal["raza"] = ;
// console.log();

/*------------------
10)
Hay tres errores en el siguiente objeto.
¡Encuéntralos y arréglalos!
------------------*/

const user2 = {
  id: 102,
  email: "pedro@dev.com",
  personalInfo: {
    name: "Pedro",
    address: {
      line1: "Calle de la Escuela",
      line2: "42",
      city: "Barcelona",
      country: "España"
    }
  }
};

/*------------------
11)
Revisa todo tu código anterior.
Descomenta cada línea donde hayas usado
notación de punto o de corchetes,
y reescribe esas líneas usando el sistema contrario.
¡Asegúrate de que el código sigue funcionando!
------------------*/

// Ejemplo:
// console.log(person.name); → console.log(person["name"]);
// user["email"] = ... → user.email = ...
