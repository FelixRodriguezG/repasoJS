
# Usos del método `reduce()` en JavaScript: Ejemplos y Explicaciones

El método `Array.prototype.reduce()` de JavaScript es una herramienta poderosa para *reducir* una colección de valores (un array) a un único resultado.  
En esencia, `reduce` aplica una función *reductora* que combina un *acumulador* y el *valor actual* del array en cada iteración, produciendo al final un único valor acumulado.  
Esta versatilidad permite realizar desde sumas simples hasta transformaciones complejas de datos. A continuación, exploramos **diferentes usos de `reduce`**, organizados por tipo de datos y patrones de uso, con ejemplos prácticos y explicaciones detalladas de cómo funcionan el *acumulador* (`accumulator`), el *valor actual* (`currentValue`) y el *valor inicial* en cada caso.

---

## 1. Arrays de Números

### Suma de todos los elementos del array

```javascript
const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaTotal); // 15
```

**Explicación completa:**  
Aquí la función reductora toma `acumulador` (comienza en `0`) y `valorActual` (cada elemento del array `numeros`). En cada iteración retorna la suma de ambos, acumulando el total. El valor inicial `0` asegura que la suma empiece en cero y previene errores con arrays vacíos. Tras iterar por `[1,2,3,4,5]`, el `acumulador` final es `15`, que es la suma de todos los elementos.

### Producto de todos los elementos del array

```javascript
const nums = [1, 2, 3, 4];
const productoTotal = nums.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
console.log(productoTotal); // 24
```

**Explicación completa:**  
El acumulador empieza en `1`. En cada iteración, `valorActual` se multiplica por el acumulador y el resultado se usa como nuevo acumulador. Así, el proceso sería: `1*1 = 1`, luego `1*2 = 2`, luego `2*3 = 6`, luego `6*4 = 24`. El resultado final es `24`.

### Cálculo del promedio de los elementos

```javascript
const valores = [10, 8, 4, 2];
const sumaValores = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
const promedio = sumaValores / valores.length;
console.log(promedio); // 6
```

**Explicación completa:**  
Utilizamos `reduce` para sumar todos los números (`10+8+4+2 = 24`). El acumulador inicia en `0` y acumula la suma de los valores actuales. Tras la reducción, dividimos el resultado (`24`) por la cantidad de elementos (`4`), obteniendo `6` como promedio.

### Encontrar el valor máximo

```javascript
const numeros2 = [5, 20, 100, 60, 1];
const maximo = numeros2.reduce((acumulador, valorActual) => {
  return valorActual > acumulador ? valorActual : acumulador;
}, numeros2[0]);
console.log(maximo); // 100
```

**Explicación completa:**  
Comparamos `valorActual` con `acumulador` y retornamos el mayor de los dos. El acumulador "va guardando" el mayor valor visto hasta el momento. Al final, `maximo` contiene el valor más alto (`100`).

---

## 2. Arrays de Strings

### Concatenación de todos los strings

```javascript
const palabras = ["Hola", " ", "mundo", "!"];
const frase = palabras.reduce((acumulador, valorActual) => acumulador + valorActual, "");
console.log(frase); // "Hola mundo!"
```

**Explicación completa:**  
Concatena todos los elementos en un solo string. El acumulador inicia como `""` (cadena vacía). En cada iteración, agrega (`+`) el `valorActual` al acumulador.

### Conteo del total de caracteres

```javascript
const palabras2 = ["apple", "banana", "cherry"];
const totalCaracteres = palabras2.reduce((acumulador, valorActual) => acumulador + valorActual.length, 0);
console.log(totalCaracteres); // 16
```

**Explicación completa:**  
Suma la longitud de cada palabra. Se empieza en `0` y se suma `valorActual.length` en cada paso.

### Frecuencia de palabras (conteo de ocurrencias)

```javascript
const palabras3 = ["foo", "bar", "foo", "baz", "bar", "foo"];
const frecuencia = palabras3.reduce((acumulador, valorActual) => {
  acumulador[valorActual] = (acumulador[valorActual] || 0) + 1;
  return acumulador;
}, {});
console.log(frecuencia); // { foo: 3, bar: 2, baz: 1 }
```

**Explicación completa:**  
Usamos un objeto como acumulador. Por cada `valorActual`, incrementamos su cuenta o la iniciamos en `1` si no existía.

---

## 3. Arrays de Objetos

### Sumar valores de una propiedad

```javascript
const pedidos = [
  { id: 1, total: 150 },
  { id: 2, total: 50 },
  { id: 3, total: 200 }
];
const totalVentas = pedidos.reduce((acumulador, pedido) => acumulador + pedido.total, 0);
console.log(totalVentas); // 400
```

**Explicación completa:**  
Suma los valores de la propiedad `total` de todos los objetos.

### Agrupar objetos por una propiedad

```javascript
const personas = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
  { nombre: 'Carlos', edad: 25 },
  { nombre: 'Marta', edad: 30 }
];
const agrupadoPorEdad = personas.reduce((acumulador, persona) => {
  const clave = persona.edad;
  if (!acumulador[clave]) {
    acumulador[clave] = [];
  }
  acumulador[clave].push(persona);
  return acumulador;
}, {});
console.log(agrupadoPorEdad);
```

**Explicación completa:**  
Agrupa objetos en arrays según su edad como clave.

### Agregación por clave

```javascript
const ventas = [
  { producto: 'A', cantidad: 30 },
  { producto: 'B', cantidad: 20 },
  { producto: 'A', cantidad: 50 },
  { producto: 'C', cantidad: 10 }
];
const totalPorProducto = ventas.reduce((acumulador, venta) => {
  const prod = venta.producto;
  acumulador[prod] = (acumulador[prod] || 0) + venta.cantidad;
  return acumulador;
}, {});
console.log(totalPorProducto); 
// { A: 80, B: 20, C: 10 }
```

**Explicación completa:**  
Suma las cantidades agrupadas por el nombre del producto.

---

## 4. Transformar Arrays y Objetos

### Convertir un array en un objeto (indexación)

```javascript
const usuarios = [
  { id: 1, nombre: "Alice", edad: 25 },
  { id: 2, nombre: "Bob", edad: 30 },
  { id: 3, nombre: "Charlie", edad: 35 }
];
const usuariosPorId = usuarios.reduce((acumulador, usuario) => {
  acumulador[usuario.id] = usuario;
  return acumulador;
}, {});
console.log(usuariosPorId);
```

**Explicación completa:**  
Usamos el `id` como clave y el objeto como valor para crear un diccionario.

### Convertir un objeto en un array

```javascript
const puntajes = { Alice: 3, Bob: 5, Charlie: 2 };
const resumen = Object.entries(puntajes).reduce((acc, [nombre, puntos]) => {
  acc.push(`${nombre} tiene ${puntos} puntos`);
  return acc;
}, []);
console.log(resumen);
```

**Explicación completa:**  
Convierte las entradas de un objeto en un array de mensajes con strings descriptivos.

---

## 5. Casos Avanzados

### Implementar `map()` con `reduce()`

```javascript
const numeros3 = [1, 2, 3, 4];
const alCuadrado = numeros3.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);
console.log(alCuadrado); // [1, 4, 9, 16]
```

**Explicación completa:**  
Transforma cada elemento con una función y acumula los resultados en un nuevo array.

### Implementar `filter()` con `reduce()`

```javascript
const mixto = [10, 5, 12, 3, 20];
const filtrados = mixto.reduce((acc, cur) => {
  if (cur > 10) acc.push(cur);
  return acc;
}, []);
console.log(filtrados); // [12, 20]
```

**Explicación completa:**  
Filtra elementos según una condición y los acumula en un nuevo array.

### Composición de funciones

```javascript
const doble = x => x * 2;
const incrementar = x => x + 1;

const compose = (...funciones) => (valorInicial) => 
  funciones.reduceRight((acc, fn) => fn(acc), valorInicial);

const resultado = compose(incrementar, doble)(5);
console.log(resultado); // 11
```

**Explicación completa:**  
Aplica funciones de derecha a izquierda usando `reduceRight`. El resultado de una función se pasa a la siguiente.

---

**En resumen**, `reduce()` es una herramienta muy flexible para transformar y procesar arrays en JavaScript. Con práctica, permite escribir código más limpio, expresivo y poderoso.
