# 📘 Cheat Sheet Completo – Métodos de Arrays y Strings en JavaScript

✅ = Modifica el valor original  
❌ = No modifica el valor original  

---

## 🔷 Métodos de Arrays

### 🔹 Combinación y transformación

| Método                          | Modifica | Devuelve               | Ejemplo                                   |
|---------------------------------|----------|-------------------------|-------------------------------------------|
| `array.concat(arr2)`           | ❌        | Nuevo array combinado   | `[1].concat([2]) → [1,2]`                  |
| `array.join(sep)`              | ❌        | String unido por sep    | `['a','b'].join('-') → 'a-b'`             |
| `array.slice(inicio, fin)`     | ❌        | Subarray                | `[1,2,3].slice(1) → [2,3]`                 |
| `array.splice(i, del, ...vals)`| ✅        | Elementos eliminados    | `[1,2,3].splice(1,1,9) → [2]`              |
| `array.toSpliced(...)`         | ❌        | Nuevo array             | `[1,2,3].toSpliced(1,1,9) → [1,9,3]`       |
| `array.toString()`             | ❌        | String con comas        | `[1,2].toString() → '1,2'`                 |
| `array.toLocaleString()`       | ❌        | String localizado       | `[1234567].toLocaleString()`              |

### 🔸 Búsqueda

| Método                            | Modifica | Devuelve                 | Ejemplo                                          |
|-----------------------------------|----------|---------------------------|--------------------------------------------------|
| `array.indexOf(val)`             | ❌        | Primer índice de val      | `[1,2,3].indexOf(2) → 1`                         |
| `array.lastIndexOf(val)`        | ❌        | Último índice             | `[1,2,2].lastIndexOf(2) → 2`                     |
| `array.find(fn)`                | ❌        | Primer elemento que cumple| `[1,2,3].find(x => x > 1) → 2`                   |
| `array.findLast(fn)`            | ❌        | Último que cumple         | `[1,2,3].findLast(x => x < 3) → 2`              |
| `array.findIndex(fn)`          | ❌        | Índice del primero        | `[1,2,3].findIndex(x => x === 2) → 1`           |
| `array.findLastIndex(fn)`      | ❌        | Índice del último         | `[1,2,3].findLastIndex(x => x < 3) → 1`         |
| `Array.isArray(x)`             | ❌        | `true` si es array        | `Array.isArray([1]) → true`                     |

### 🟩 Recorrido y evaluación

| Método             | Modifica | Devuelve              | Ejemplo                                     |
|--------------------|----------|------------------------|---------------------------------------------|
| `array.forEach(fn)`| ❌        | `undefined`            | `[1,2].forEach(x => console.log(x))`        |
| `array.filter(fn)` | ❌        | Nuevo array filtrado   | `[1,2,3].filter(x => x > 1) → [2,3]`        |
| `array.map(fn)`    | ❌        | Nuevo array mapeado    | `[1,2].map(x => x * 2) → [2,4]`             |
| `array.every(fn)`  | ❌        | `true` si todos cumplen| `[2,4].every(x => x % 2 === 0) → true`      |
| `array.some(fn)`   | ❌        | `true` si alguno cumple| `[1,2,3].some(x => x > 2) → true`           |

### 🧮 Reducción

| Método                   | Modifica | Devuelve          | Ejemplo                                          |
|--------------------------|----------|--------------------|--------------------------------------------------|
| `array.reduce(fn, init)`| ❌        | Valor reducido     | `[1,2,3].reduce((a,b)=>a+b,0) → 6`               |
| `array.reduceRight(fn)` | ❌        | Reducido desde el final | `['a','b'].reduceRight((a,b)=>a+b) → 'ba'` |

### 🔄 Modificadores

| Método                | Modifica | Devuelve             | Ejemplo                                  |
|------------------------|----------|-----------------------|------------------------------------------|
| `array.push(val)`     | ✅        | Nueva longitud        | `let a = [1]; a.push(2) → 2`             |
| `array.pop()`         | ✅        | Último valor eliminado| `[1,2].pop() → 2`                         |
| `array.unshift(val)`  | ✅        | Nueva longitud        | `[2].unshift(1) → 2`                      |
| `array.shift()`       | ✅        | Primer valor eliminado| `[1,2].shift() → 1`                        |
| `array.reverse()`     | ✅        | Mismo array invertido | `[1,2].reverse() → [2,1]`                 |
| `array.toReversed()`  | ❌        | Nuevo array invertido | `[1,2].toReversed() → [2,1]`              |
| `array.sort()`        | ✅        | Array ordenado        | `[3,1].sort() → [1,3]`                    |
| `array.toSorted()`    | ❌        | Nuevo array ordenado  | `[3,1].toSorted() → [1,3]`                |

### 🧪 Utilidades modernas

| Método                          | Modifica | Devuelve                    | Ejemplo                                           |
|---------------------------------|----------|------------------------------|---------------------------------------------------|
| `array.with(i, val)`           | ❌        | Nuevo array con cambio       | `[1,2,3].with(1,9) → [1,9,3]`                      |
| `array.length`                 | ✅        | Longitud (si se reasigna)    | `[1,2,3].length → 3`                              |
| `array.at(i)`                  | ❌        | Elemento por índice          | `[1,2,3].at(-1) → 3`                              |
| `array.includes(val)`         | ❌        | `true` si contiene valor     | `[1,2,3].includes(2) → true`                      |
| `array.fill(val, i, f)`       | ✅        | Array rellenado              | `[1,2,3].fill(0,1) → [1,0,0]`                     |
| `array.copyWithin(dest, i, f)`| ✅        | Mismo array modificado       | `[1,2,3,4].copyWithin(0,2) → [3,4,3,4]`           |
| `array.flat()`                | ❌        | Array aplanado (1 nivel)     | `[1,[2,[3]]].flat() → [1,2,[3]]`                  |
| `array.flatMap(fn)`          | ❌        | Map + flat (1 nivel)         | `[1,2].flatMap(x => [x,x]) → [1,1,2,2]`          |
| `array.entries()`            | ❌        | Iterador [índice, valor]     | `[...['a','b'].entries()] → [[0,'a'],[1,'b']]`   |
| `array.keys()`               | ❌        | Iterador de índices          | `[...['a','b'].keys()] → [0,1]`                   |
| `array.values()`             | ❌        | Iterador de valores          | `[...['a','b'].values()] → ['a','b']`            |
| `Array.from(obj)`           | ❌        | Array desde iterable         | `Array.from('abc') → ['a','b','c']`              |
| `Array.of(...vals)`         | ❌        | Array desde valores          | `Array.of(1,2) → [1,2]`                           |

## 🔷 Métodos de Strings

Todos los métodos de strings son **no destructivos** (❌) porque los strings son **inmutables**.

| Método                      | Modifica | Devuelve                        | Ejemplo                                               |
|-----------------------------|----------|----------------------------------|-------------------------------------------------------|
| `str.charAt(i)`            | ❌        | Carácter en índice i             | `'hola'.charAt(1) → 'o'`                              |
| `str.charCodeAt(i)`        | ❌        | Código Unicode                   | `'A'.charCodeAt(0) → 65`                              |
| `str.at(i)`                | ❌        | Carácter en i (negativos ok)     | `'hola'.at(-1) → 'a'`                                 |
| `str.slice(i, f)`          | ❌        | Substring                        | `'hola'.slice(1,3) → 'ol'`                            |
| `str.substring(i, f)`      | ❌        | Substring (sin negativos)        | `'hola'.substring(1,3) → 'ol'`                        |
| `str.substr(i, len)`       | ❌        | Substring (obsoleto)             | `'hola'.substr(1,2) → 'ol'`                           |
| `str.toLowerCase()`        | ❌        | En minúsculas                    | `'HOLA'.toLowerCase() → 'hola'`                       |
| `str.toUpperCase()`        | ❌        | En mayúsculas                    | `'hola'.toUpperCase() → 'HOLA'`                       |
| `str.trim()`               | ❌        | Sin espacios laterales           | `' hola '.trim() → 'hola'`                            |
| `str.trimStart()` / `trimLeft()` | ❌  | Sin espacios al inicio           | `' hola'.trimStart() → 'hola'`                        |
| `str.trimEnd()` / `trimRight()`  | ❌  | Sin espacios al final            | `'hola '.trimEnd() → 'hola'`                          |
| `str.repeat(n)`            | ❌        | Repite n veces                   | `'ha'.repeat(3) → 'hahaha'`                           |
| `str.replace(pat, new)`    | ❌        | Reemplaza una coincidencia       | `'hola mundo'.replace('mundo', 'chico') → 'hola chico'` |
| `str.replaceAll(pat, new)` | ❌        | Reemplaza todas                  | `'a-a-a'.replaceAll('-', '+') → 'a+a+a'`              |
| `str.includes(sub)`        | ❌        | `true` si contiene               | `'hola'.includes('la') → true`                        |
| `str.startsWith(sub)`      | ❌        | `true` si comienza con           | `'hola'.startsWith('ho') → true`                      |
| `str.endsWith(sub)`        | ❌        | `true` si termina con            | `'hola'.endsWith('la') → true`                        |
| `str.indexOf(sub)`         | ❌        | Índice de primera ocurrencia     | `'banana'.indexOf('a') → 1`                           |
| `str.lastIndexOf(sub)`     | ❌        | Índice de última ocurrencia      | `'banana'.lastIndexOf('a') → 5`                       |
| `str.split(sep)`           | ❌        | Array de partes                  | `'a,b,c'.split(',') → ['a','b','c']`                 |
| `str.match(regex)`         | ❌        | Array con coincidencias          | `'abc123'.match(/\d+/) → ['123']`                    |
| `str.matchAll(regex)`      | ❌        | Iterador con todas las coincidencias | `Array.from('ab1cd2'.matchAll(/\d/g)) → ['1','2']` |
| `str.padStart(n, fill)`    | ❌        | Rellenar al inicio               | `'5'.padStart(3,'0') → '005'`                         |
| `str.padEnd(n, fill)`      | ❌        | Rellenar al final                | `'5'.padEnd(3,'0') → '500'`                           |
| `str.normalize()`          | ❌        | Normaliza unicode                | `'mañana'.normalize()`                                |
