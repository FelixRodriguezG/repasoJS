/*------------------
1)
Crea un array llamado "numbers" que incluya los números del 0 al 5.
------------------*/


console.log("Ejercicio 1", numbers.reduce((a, b) => a + b) === 15 ? "es correcto." : "es incorrecto.");

/*------------------
2)
Imprime la edad de Sofía en la consola.
------------------*/

const friends = [
  { name: "Pedro", relationship: "escuela", age: 30 },
  { name: "Sofía", relationship: "trabajo", age: 38 },
];

console.log("Ejercicio 2", friends[1].age);

/*------------------
3)
"Tuesday" está en el lugar equivocado. Extráelo con .splice y vuelve a insertarlo en su sitio correcto usando otra vez .splice.
Pista: guarda "Tuesday" en una variable cuando lo extraigas.
------------------*/


weekDays.splice(2, 0, day[0]);

/*------------------
4)
Agrega los días restantes de la semana a "weekDays" usando .push.
------------------*/

console.log("Ejercicio 4", weekDays[6] === "Saturday" ? "es correcto." : "es incorrecto.");

/*------------------
5)
Imprime todos los elementos del array "weekDays" como una cadena separada por comas.
NO uses bucles.
------------------*/

console.log(`Ejercicio 5: Los días de la semana son ${listOfWeekDays}.`);

/*------------------
6)
Haz que el array empiece por "Monday" y acabe en "Sunday". Usa métodos de: .push, .pop, .shift o .unshift
------------------*/


console.log("Ejercicio 6", weekDays[6] === "Sunday" ? "es correcto." : "es incorrecto.");

/*------------------
7)
Usa métodos vistos para invertir el array "weekDays" sin usar bucles.
------------------*/


console.log("Ejercicio 7", reversedWeekDays[6] === "Monday" ? "es correcto." : "es incorrecto.");

/*------------------
8)
Invierte el orden de "writtenNumbers" en una sola línea de código.
------------------*/

const writtenNumbers = ["one", "two", "three", "four", "five"];

console.log("Ejercicio 8", writtenNumbers);

/*------------------
9)
Extrae cada elemento del principio del array "num", multiplícalo por 7 y agrégalo a "numTimesSeven". No uses bucles.
------------------*/

const num = [1, 2, 3];

console.log("Ejercicio 9", num.length === 0 && numTimesSeven[1] === 14 ? "es correcto." : "es incorrecto.");

/*------------------
10)
Comprueba si el ID "1x3v6umb0i9p" está dentro del array "listOfIDs". Usa una sola línea para guardar true/false en "includesID".
------------------*/

const listOfIDs = ["1x31irevblzm", "1x3wznfkvkov", "1x3x9s82j3go", "1x3of9nx54kk", "1x3jqe3jmhre", "1x3r0cai8s3b", "1x3j687gtvh9", "1x3q9mtup3vd", "1x3tfs237azl", "1x3w5de6iw8x", "1x36yim09v32", "1x3jxnv2o1fa", "1x31erunsrgz", "1x3u8p6k9dzb", "1x35hav9qdwq", "1x3dgvjrjtst", "1x3qhvzf10cv", "1x3lbhfb5xrp", "1x3kogvzbda7", "1x3dbpw3h8cc", "1x3z1zqtzk5w", "1x3o3sp1ngii", "1x367bviy1hp", "1x3d52x8jwvm", "1x36j7e79d9i", "1x3vmccrc4b6", "1x3jji9iqwuq", "1x37ddh7st7v", "1x33ywwl8mih", "1x33jagi36k2", "1x3eyiin802x", "1x304vrzymap", "1x3tlbecxpu4", "1x3b1bwgyrry", "1x35r0iyqz77", "1x30n9uuqgyk", "1x33cybkioeq", "1x3qgywv1pux", "1x3s2ordohci", "1x38oyqc006h", "1x3sysj3ww2q", "1x3bp13ddk35", "1x3awsoimdlb", "1x3wv3wpzqlg", "1x3k2e2j409g", "1x3j4d0f461s", "1x3r2mxhh2bq", "1x37lv6wzc9z", "1x3pjpzmt1wl", "1x3gxle96pxn", "1x374m6eygc9", "1x37x7pt1hk9", "1x3v3vev0o13", "1x39l4kt4j59", "1x35ensw5w0p", "1x30608784ic", "1x3v752xl3jf", "1x3v6umb0i9p"];


console.log("Ejercicio 10", includesID ? "es correcto." : "es incorrecto.");

/*------------------
11)
Imprime en consola el último ID del array "listOfIDs" usando su longitud para calcular el índice.
------------------*/


console.log("Ejercicio 11", listOfIDs.length === 56 && lastID === "1x3v6umb0i9p" ? "es correcto." : "es incorrecto.");
