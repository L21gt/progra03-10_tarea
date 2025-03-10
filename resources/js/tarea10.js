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

