// Tarea 1
const greetWorld = () => {
    console.log('Hello World!');
}

greetWorld() // comprobar que Tarea 1 funciona

// Tarea 2
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
const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

console.log(agreeOrDisagree('yep', 'yep')) // comprobar que Tarea 3 funciona (debería devolver 'You agree!')
console.log(agreeOrDisagree('yep', 'nope')) // comprobar que Tarea 3 funciona (debería devolver 'You disagree!')
