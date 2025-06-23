# 📚 Guía Completa de JavaScript

## 📋 Índice de Contenidos

1. [Fundamentos](#fundamentos)
   - [Tipos de Datos](#tipos-de-datos)
   - [Variables](#variables)
   - [Operadores](#operadores)
2. [Estructuras de Control](#estructuras-de-control)
   - [Condicionales](#condicionales)
   - [Bucles](#bucles)
3. [Estructuras de Datos](#estructuras-de-datos)
   - [Arrays](#arrays)
   - [Objetos](#objetos)
4. [Funciones](#funciones)
   - [Tipos de Funciones](#tipos-de-funciones)
   - [Scope](#scope)
   - [Funciones de Orden Superior](#funciones-de-orden-superior)
5. [Métodos Importantes](#métodos-importantes)
   - [Métodos de Array](#métodos-de-array)
   - [Métodos de String](#métodos-de-string)
   - [Métodos de Objeto](#métodos-de-objeto)

## Fundamentos

### Tipos de Datos

JavaScript tiene 8 tipos de datos básicos:

```javascript
// Primitivos
let string = "Hola mundo"; // String (cadena de texto)
let number = 42; // Number (número)
let boolean = true; // Boolean (booleano)
let nulo = null; // Null (nulo)
let indefinido = undefined; // Undefined (indefinido)
let symbol = Symbol("único"); // Symbol (símbolo)
let bigInt = 9007199254740991n; // BigInt (números grandes)

// Referencia
let object = { nombre: "Juan" }; // Object (objeto)
```

### Variables

Tres formas de declarar variables:

```javascript
var nombre = "Juan"; // Forma antigua, evitar usar
let edad = 25; // Variable que puede cambiar
const PI = 3.14159; // Constante, no puede cambiar

// Ejemplo de scope
{
  let local = "Solo visible aquí";
  var global = "Visible en todas partes";
}
```

### Operadores

```javascript
// Operadores Aritméticos
let suma = 5 + 3; // 8
let resta = 5 - 3; // 2
let multiplicacion = 5 * 3; // 15
let division = 6 / 2; // 3
let modulo = 7 % 3; // 1
let exponente = 2 ** 3; // 8

// Operadores de Comparación
let igual = 5 == "5"; // true (compara valor)
let estricto = 5 === "5"; // false (compara valor y tipo)
let mayor = 5 > 3; // true
let menor = 5 < 3; // false

// Operadores Lógicos
let and = true && false; // false
let or = true || false; // true
let not = !true; // false
```

## Estructuras de Control

### Condicionales

```javascript
// if-else
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// switch
let dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Inicio de semana");
    break;
  case "Viernes":
    console.log("¡Fin de semana!");
    break;
  default:
    console.log("Día entre semana");
}

// Operador ternario
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

### Bucles

```javascript
// for clásico
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

// do-while
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// for...of (para arrays)
let frutas = ["manzana", "pera", "uva"];
for (let fruta of frutas) {
  console.log(fruta);
}

// for...in (para objetos)
let persona = { nombre: "Ana", edad: 25 };
for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
```

## Estructuras de Datos

### Arrays

```javascript
// Creación y manipulación
let frutas = ["manzana", "pera", "uva"];
frutas.push("naranja"); // Añadir al final
frutas.unshift("plátano"); // Añadir al inicio
let ultima = frutas.pop(); // Quitar del final
let primera = frutas.shift(); // Quitar del inicio

// Métodos útiles
let numeros = [1, 2, 3, 4, 5];
let dobles = numeros.map((n) => n * 2); // [2, 4, 6, 8, 10]
let pares = numeros.filter((n) => n % 2 === 0); // [2, 4]
let suma = numeros.reduce((a, b) => a + b, 0); // 15
let existe = numeros.includes(3); // true
let indice = numeros.indexOf(3); // 2
```

### Objetos

```javascript
// Creación y acceso
let persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

// Acceso a propiedades
console.log(persona.nombre); // Notación de punto
console.log(persona["edad"]); // Notación de corchetes

// Métodos de objeto
Object.keys(persona); // ["nombre", "edad", "saludar"]
Object.values(persona); // ["Juan", 25, ƒ]
Object.entries(persona); // [["nombre","Juan"], ["edad",25], ...]
```

## Funciones

### Tipos de Funciones

```javascript
// Función declarativa
function sumar(a, b) {
  return a + b;
}

// Función expresiva
const restar = function (a, b) {
  return a - b;
};

// Función flecha
const multiplicar = (a, b) => a * b;

// Función con parámetros por defecto
function saludar(nombre = "Invitado") {
  return `Hola ${nombre}`;
}

// Función con rest parameters
function sumarTodos(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
```

### Scope

```javascript
let global = "Variable global";

function ejemploScope() {
  let local = "Variable local";
  console.log(global); // Accesible
  console.log(local); // Accesible

  function interno() {
    let interno = "Variable interna";
    console.log(global); // Accesible
    console.log(local); // Accesible
    console.log(interno); // Accesible
  }
}

console.log(global); // Accesible
console.log(local); // Error: no accesible
console.log(interno); // Error: no accesible
```

### Funciones de Orden Superior

```javascript
// Función que recibe otra función
function ejecutar(fn, valor) {
  return fn(valor);
}

const duplicar = (x) => x * 2;
console.log(ejecutar(duplicar, 5)); // 10

// Función que retorna otra función
function multiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicador = multiplicador(2);
console.log(duplicador(5)); // 10

// Ejemplos con arrays
const numeros = [1, 2, 3, 4, 5];

// map: transformar cada elemento
const duplicados = numeros.map((n) => n * 2);

// filter: filtrar elementos
const pares = numeros.filter((n) => n % 2 === 0);

// reduce: reducir a un único valor
const suma = numeros.reduce((total, n) => total + n, 0);

// forEach: iterar sobre elementos
numeros.forEach((n) => console.log(n));
```

## Métodos Importantes

### Métodos de Array

```javascript
const arr = [1, 2, 3, 4, 5];

// Transformación
arr.map((x) => x * 2); // [2, 4, 6, 8, 10]
arr.filter((x) => x > 2); // [3, 4, 5]
arr.reduce((a, b) => a + b); // 15
arr.slice(1, 3); // [2, 3]
arr.splice(1, 2); // modifica el array original

// Búsqueda
arr.find((x) => x > 2); // 3
arr.findIndex((x) => x > 2); // 2
arr.includes(3); // true
arr.indexOf(3); // 2

// Modificación
arr.push(6); // añade al final
arr.pop(); // elimina del final
arr.unshift(0); // añade al inicio
arr.shift(); // elimina del inicio
```

### Métodos de String

```javascript
const str = "Hola Mundo";

// Transformación
str.toLowerCase(); // "hola mundo"
str.toUpperCase(); // "HOLA MUNDO"
str.trim(); // elimina espacios inicio/fin
str.replace("Mundo", "JavaScript"); // "Hola JavaScript"

// Extracción
str.substring(0, 4); // "Hola"
str.slice(5); // "Mundo"
str.split(" "); // ["Hola", "Mundo"]

// Búsqueda
str.startsWith("Hola"); // true
str.endsWith("Mundo"); // true
str.includes("la Mu"); // true
str.indexOf("Mundo"); // 5
```

### Métodos de Objeto

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
};

// Manipulación de propiedades
Object.keys(persona); // ["nombre", "edad"]
Object.values(persona); // ["Juan", 25]
Object.entries(persona); // [["nombre","Juan"], ["edad",25]]

// Modificación de objetos
Object.freeze(persona); // hace inmutable el objeto
Object.seal(persona); // permite modificar propiedades existentes
Object.assign({}, persona); // crea una copia superficial

// Propiedades
Object.defineProperty(persona, "id", {
  value: 1,
  writable: false,
});
```

## Tips y Mejores Prácticas

1. **Usar `const` por defecto**, `let` cuando necesites reasignar
2. **Evitar `var`** debido a su comportamiento con el scope
3. **Preferir funciones flecha** para callbacks y funciones cortas
4. **Utilizar destructuring** para extraer propiedades:
   ```javascript
   const { nombre, edad } = persona;
   const [primero, segundo] = array;
   ```
5. **Usar operador spread** para copiar arrays/objetos:
   ```javascript
   const copiaArray = [...array];
   const copiaObjeto = { ...objeto };
   ```
6. **Manejar errores** con try/catch:
   ```javascript
   try {
     // código que puede fallar
   } catch (error) {
     console.error(error);
   }
   ```

---

Esta guía cubre los conceptos fundamentales de JavaScript con ejemplos prácticos. Úsala como referencia mientras resuelves los ejercicios del repositorio.
