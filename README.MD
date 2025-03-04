Luis Ruben Velasquez Garcia  
Carnet 24011341  
Curso JavaScript Testing 3er Semestre  
Tarea 10  

# INSTRUCCIONES
Sabes mucho sobre sintaxis, el flujo de control y las funciones de JavaScript, ahora reforzaremos esas habilidades.
Realiza lo siguiente en un mismo script.

### TAREA 1
Escribe una funcion greetWorld(). Tu funcion no debe tener parametros y debe devolver a cadena 'Hello, World!'.
Puedes usar declaracion de funciones o expresion de funciones.


### TAREA 2
La edad minima mas comun para votar es de 18 años. Escribe una funcion canIVote() que tome un numero que represente la edad de la persona y devuelva el valor booleano true si tiene 18 años o mas, y el valor booleano false si no los tiene. Muestralo en consola.

Realiza la prueba con:
console.log(canIVote(19));
 

### TAREA 3
Escriba una funcion, agreeOrDisagree(), que tome dos cadena y devuelva 'You agree!' si las dos cadena son iguales y 'You disagree!' si las dos cadenas son diferentes. Muestra el resultado en consola.

Prueba tu codigo con:
console.log(agreeOrDisagree("yep", "yep"))

### TAREA 4
Escribe una funcion, lifePhase(), que tome la edad(age) de una persona como numero y devuelva en que fase de la vida se encuentra.

Aqui estan las clasificaciones:
0- 3 deberia devolver 'baby'
4-12 deberia devolver 'child'
13-19 deberia devolver 'teen'
20-64 deberia devolver 'adult'
65-140 deberia devolver 'senior citizen'

Si el numero es menor que cero o mayor que 140, el programa deberia devolver 'This is not a valid age'.

### TAREA 5
Escribe una funcion, finalGrade(). Deberia:

Toma tres argumentos de tipo numero.

Encuentra el average de esos tres numeros.

Devuelve la calificacion de la letra (como una cadena) average a la que corresponde.

Devuelve 'Ha ingresado una calificacion no valida' si alguna de las tres calificaciones es menor que 0 o mayor que 100.

0-59 deberia devolver: 'F'
60-69 deberia devolver: 'D'
70-79 deberia devolver: 'C'
80-89 deberia devolver: 'B'
90-100 deberia devolver:'A'

### TAREA 6
Escribe una funcion reportingForDuty(), que tenga dos parametros string, rank y lastname, y retorne una string en el siguiente formato: 'rank lastName reporting for duty'.

reportingForDuty('Private', 'Fido')
Deberia retornar 'Private Fido reporting for duty!'

### TAREA 7
Arregla el codigo.
Te presento una funcion rollTheDice(), la cual supuestamente simula el lanzamiento de dos dados y el total de los dados. La funcion casi funciona, pero hay algunos errores. ¿Puedes arreglar el codigo, por favor?

const rollTheDice = () => {
// Math.random() nos da un numero random desde 0 pero no incluye el 1
// Multiplicamos ese numero por 6 para tener un numero entre 0 y 6 pero no logramos incluir el 6
// para lograrlo hemos intentado lo siguiente sumamos 1
let die1 = Math.random() * 6 + 1
let die2 = Math.random() * 6 + 1
return die1 + die2
}

### TAREA 8
Aunque la masa de un objeto permanece constante en todo el universo, el peso esta determinado por la fuerza de gravedad que ejerce sobre el. Como cada planeta tiene una gravedad diferente, el mismo objeto pesaria cantidades distintas en cada uno de esos planetas.

Escribe una funcion, calculateWeight(). Deberia:

Tener dos parametros: earthWeight y planet.

Espera que earthWeight sea un numero.

Espera que planet sea una string.

Devuelve un numero que representa el peso de la Tierra equivalente al planet ingresado.

Manejar los siguientes casos:
'Mercury' peso = earthWeight * 0.378
'Venus' peso = earthWeight * 0.907
'Mars' peso = earthWeight * 0.377
'Jupiter' peso = earthWeight * 2.36
'Saturn' peso = earthWeight * 0.916
Para todas las demas entradas, devuelva 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

Pruebalo con:
console.log(calculateWeight(100, 'Jupiter')) // Deberia imprimir 236

### TAREA 9
Puede resultar dificil hacer un seguimiento de lo que es verdadero o falso en JavaScript. Escriba una funcion, truthyOrFalsy(), que acepte cualquier valor y devuelva true si ese valor es verdadero y false si ese valor es falso.
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

### TAREA 10
Las personas tienen muchos amigos, pero a veces creen tener mas, se ha realizado un estudio y se ha determinado que la cantidad de amigos imaginarios de una persona es igual a la cantidad de amigos por 0.25 es decir un 25% de sus amigos o 1/4 de ellos.

Escribe una funcion, numImaginatyFriends() que tome el numero de amigos de una persona y devuelva el numero de amigos imaginarios que tiene esa persona. Debido a que los amigos solo pueden venir en numeros enteros, deberias redondear el resultado al entero mas cercano antes de retornarlo. La funcion Math.ceil() te resultara util.

Utiliza las siguientes lineas de codigo para realizar la prueba:
console.log(numImaginaryFriends(20)) // Debe imprimir 5
console.log(numImaginaryFriends(10)) // debe imprimir 3

### TAREA 11
Escribe una funcion, sillySentence(), que contenga 3 parametros de cadena y devuelva la siguiente oracion tonta con los espacios en blanco completados por los argumentos pasados a la funcion.

I am so (adjetive) because I (verb) coding! Time to write some more awesome (noun)!

La llamada a sillySentence('excited', 'love', 'functions') deberia retornar 'I am so excited because I love coding! Time to write some more awesome functions!'

Utiliza la siguiente linea de codigo para realizar la prueba:
console.log(sillySentence('excited', 'love', 'functions'))

### TAREA 12
Escribe una funcion, howOld(), que tome dos parametros numericos, age y year, y devuelva cuantos años tendria una persona con esa edad en ese año.

Debe tratar tres casos diferentes:

Si el year esta en el futuro, debe devolver: 'Tu tendras [age calculada] en el año [year].'

Si el year es anterior al nacimiento, debe devolver una cadena con el siguiente formato: 'El año [year] fue [numero de años calculados] años antes de nacer.'

Si el year es en el pasado pero no anterior al año de nacimiento de la persona, debe devolver: 'Tu tenias [age calculada] en el año [year del pasado].'

Utiliza en tu funcion:
let dateToday = new Date();
let thisYear = dateToday.getFullYear();

### TAREA 13
Arregla el codigo roto:

Dado el porcentaje de ADN compartido entre dos personas, se puede calcular su probable relacion familiar.

Escribimos una funcion, whatRelation(), que tiene un parametro numerico, percentSharedDNA, y devuelve la relacion probable. Esperamos que el numero que se ingrese sea siempre un entero entre 0 y 100, pero por alguna razon no funciona.

Asi es como se supone que debe calcularse la relacion:

100 deberian regresar 'You are likely identical twins.'
35-99 deberia regresar 'You are likely parent and child or full siblings.'
14-34 deberia regresar 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 deberia regresar 'You are likely 1st cousins.'
3-5 deberian regresar 'You are likely 2nd cousins.'
1-2 deberia regresar 'You are likely 3rd cousins.'
0 deberia regresar 'You are likely not related.'

¡Lamentablemente no esta funcionando como queremos!

whatRelation(34)
Deberia regresar 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
Pero en su lugar esta regresando 'You are likely 1st cousins.'

whatRelation(3)
Deberia regresar 'You are likely 2nd cousins.'
Pero en su lugar esta regresando 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

El codigo que esta roto es el siguiente:

const whatRelation = percentSharedDNA => {
if (percentSharedDNA === 100) {
return 'You are likely identical twins.'
}
if (percentSharedDNA > 34) {
return 'You are likely parent and child or full siblings.'
}
if (percentSharedDNA < 13) {
return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
}
if (percentSharedDNA > 5) {
return 'You are likely 1st cousins.'
}
if (percentSharedDNA > 2) {
return 'You are likely 2nd cousins.'
}
if (percentSharedDNA > 0) {
return 'You are likely 3rd cousins'
}
return 'You are likely not related.'
}

console.log(whatRelation(34))
Deberia imprimir 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
Deberia imprimir 'You are likely 2nd cousins.'

### TAREA 14
Calculadora de propinas tipCalculator()
Crea una funcion, tipCalculator(), que tenga dos parametros, una cadena que represente la calidad del servicio recibido y un numero que represente el costo total.

Devuelve la propina, como un numero, en funcion de lo siguiente:
'malo' debe devolver una propina del 5%
'ok' debe devolver una propina del 15%
'bueno' debe devolver una propina del 20%
'excelente' debe devolver una propina del 30%
todas las demas entradas deben tener como valor predeterminado el 18%.

tipCalculator('good', 100) // Deberia devolver 20

### TAREA 15
Escribe una funcion, toEmoticon(), que tome una cadena y devuelva el emoticon correspondiente como cadena. Utiliza un switch/case y cubre estos casos:

'shrug' deberia regresar '|{"}|'
'smiley face' deberia regresar ':)'
'frowny face' deberia regresar ':('
'winky face' deberia regresar ';)'
'heart' deberia regresar '<3'
cualquier otra entrada deberia regresar '|(* ~ *)|'