// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//Note: parseInt converts 5- to 5.

function reverseInt(n) {
    let rev =n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n);
}

// let rev =n.toString().split('').reverse().join('');

//     if(n>=0){
//         return parseInt(rev);
//     }else{
//         return parseInt(rev) * -1;
//     }

module.exports = reverseInt;
