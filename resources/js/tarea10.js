let numTarea = 0;
const separadorTarea = () => {
    numTarea++;
    console.log(' ');
    console.log('***************************************');
    console.log("Tarea #: "+numTarea);
    console.log('----------------------------------------');
}




// Tarea 1
separadorTarea(); // separador de tarea en consola


const greetWorld = () => {
    console.log('Hello World!');
}

greetWorld() // comprobar que Tarea 1 funciona

// Tarea 2
separadorTarea(); // separador de tarea en consola

const canIVote = (age) => {
    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    }
}

console.log(canIVote(19)) // comprobar que Tarea 2 funciona (debería devolver true) 
console.log(canIVote(17)) // comprobar que Tarea 2 funciona (debería devolver false)
console.log(canIVote(18)) // comprobar que Tarea 2 funciona (debería devolver true)


// Tarea 3
separadorTarea(); // separador de tarea en consola

const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

console.log(agreeOrDisagree('yep', 'yep')) // comprobar que Tarea 3 funciona (debería devolver 'You agree!')
console.log(agreeOrDisagree('yep', 'nope')) // comprobar que Tarea 3 funciona (debería devolver 'You disagree!')


// Tarea 4  
separadorTarea(); // separador de tarea en consola

const lifePhase = (age) => {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}

console.log(lifePhase(0)) // comprobar que Tarea 4 funciona (debería devolver 'baby')
console.log(lifePhase(5)) // comprobar que Tarea 4 funciona (debería devolver 'child')
console.log(lifePhase(18)) // comprobar que Tarea 4 funciona (debería devolver 'teen')  
console.log(lifePhase(40)) // comprobar que Tarea 4 funciona (debería devolver 'adult')  
console.log(lifePhase(100)) // comprobar que Tarea 4 funciona (debería devolver 'senior citizen')  
console.log(lifePhase(150)) // comprobar que Tarea 4 funciona (debería devolver 'This is not a valid age') 
console.log(lifePhase(-10)) // comprobar que Tarea 4 funciona (debería devolver 'This is not a valid age') 


// Tarea 5
separadorTarea(); // separador de tarea en consola

const finalGrade = (score1, score2, score3) => {
    // Verificar que todos los puntajes sean válidos
    if (
        score1 < 0 || score1 > 100 ||
        score2 < 0 || score2 > 100 ||
        score3 < 0 || score3 > 100
    ) {
        return 'You have entered an invalid grade';
    }
    let promedio = (score1 + score2 + score3) / 3;

    if (promedio >= 0 && promedio <= 59.99) {
        return 'F';
    } else if (promedio >= 60 && promedio <= 69.99) {
        return 'D';
    } else if (promedio >= 70 && promedio <= 79.99) {
        return 'C';
    } else if (promedio >= 80 && promedio <= 89.99) {
        return 'B';
    } else if (promedio >= 90 && promedio <= 100) {
        return 'A';
    }
}

console.log(finalGrade(99, 92, 95)) // comprobar que Tarea 5 funciona (debería devolver 'A')
console.log(finalGrade(99, 70, 89)) // comprobar que Tarea 5 funciona (debería devolver 'B')
console.log(finalGrade(99, 70, 60)) // comprobar que Tarea 5 funciona (debería devolver 'C')
console.log(finalGrade(99, 70, 40)) // comprobar que Tarea 5 funciona (debería devolver 'D')
console.log(finalGrade(99, 70, 0)) // comprobar que Tarea 5 funciona (debería devolver 'F')
console.log(finalGrade(101, 92, 59)) // comprobar que Tarea 5 funciona (debería devolver 'You have entered an invalid grade')

// Tarea 6
separadorTarea(); // separador de tarea en consola

const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Private', 'Fido')) // comprobar que Tarea 6 funciona (debería devolver 'Private Smith reporting for duty!')


// Tarea 7
separadorTarea(); // separador de tarea en consola

const rollTheDice = () => {
    // Math.random() nos da un numero random desde 0 pero no incluye el 1
    // Multiplicamos ese numero por 6 para tener un numero entre 0 y 6 pero no logramos incluir el 6
    // para lograrlo hemos intentado lo siguiente sumamos 1
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1
    return die1 + die2
    }

console.log(rollTheDice()) // comprobar que Tarea 7 funciona (debería devolver un numero entre 2 y 12)
console.log(rollTheDice()) // comprobar que Tarea 7 funciona (debería devolver un numero entre 2 y 12)
console.log(rollTheDice()) // comprobar que Tarea 7 funciona (debería devolver un numero entre 2 y 12)



// Tarea 8
separadorTarea(); // separador de tarea en consola

const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

console.log(calculateWeight(100, 'Jupiter')) // comprobar que Tarea 8 funciona (debería devolver 236)
console.log(calculateWeight(100, 'Saturn')) // comprobar que Tarea 8 funciona (debería devolver 91.6)
console.log(calculateWeight(100, 'Earth')) // comprobar que Tarea 8 funciona (debería devolver 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.')


// Tarea 9
separadorTarea(); // separador de tarea en consola

const truthyOrFalsy = (value) => {
    if (value) {
        return true;
    } else {
        return false;
    }
}

console.log(truthyOrFalsy(0)) // comprobar que Tarea 9 funciona (debería devolver false)
console.log(truthyOrFalsy(1)) // comprobar que Tarea 9 funciona (debería devolver true)
console.log(truthyOrFalsy('')) // comprobar que Tarea 9 funciona (debería devolver false)
console.log(truthyOrFalsy('string')) // comprobar que Tarea 9 funciona (debería devolver true)
console.log(truthyOrFalsy(null)) // comprobar que Tarea 9 funciona (debería devolver false)
console.log(truthyOrFalsy(!null)) // comprobar que Tarea 9 funciona (debería devolver true porque se esta negando el valor de null)
console.log(truthyOrFalsy(undefined)) // comprobar que Tarea 9 funciona (debería devolver false)
console.log(truthyOrFalsy(!undefined)) // comprobar que Tarea 9 funciona (debería devolver true porque se esta negando el valor de undefined)
console.log(truthyOrFalsy(NaN)) // comprobar que Tarea 9 funciona (debería devolver false)
console.log(truthyOrFalsy(!NaN)) // comprobar que Tarea 9 funciona (debería devolver true porque se esta negando el valor de NaN)


// Tarea 10
separadorTarea(); // separador de tarea en consola


const numImaginaryFriends = (friends) => {
    return Math.ceil(friends * 0.25)
}

console.log(numImaginaryFriends(20)) // comprobar que Tarea 10 funciona (debería devolver 5)   
console.log(numImaginaryFriends(10)) // comprobar que Tarea 10 funciona (debería devolver 3)


// Tarea 11
separadorTarea(); // separador de tarea en consola

const sillySentence = (adjective, verb, noun) => {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

console.log(sillySentence('excited', 'love', 'functions')); // comprobar que Tarea 11 funciona (debería devolver '


// Tarea 12
separadorTarea(); // separador de tarea en consola

const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    const yearDifference = year - thisYear;
    const newAge = age + yearDifference;

    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
}

console.log(howOld(30, 2021)) // comprobar que Tarea 12 funciona (debería devolver 'You were 26 in the year 2021')
console.log(howOld(30, 1991)) // comprobar que Tarea 12 funciona (debería devolver 'The year 1991 was 4 years before you were born')
console.log(howOld(30, 2051)) // comprobar que Tarea 12 funciona (debería devolver 'You will be 56 in the year 2051')



// Tarea 13
separadorTarea(); // separador de tarea en consola

