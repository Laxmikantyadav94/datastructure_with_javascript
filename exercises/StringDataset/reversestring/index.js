// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split('');
    let result="";

    for(let char of strArr){
        result = char +result
    }
    return result;
}

// return str.split('').reduce((rev,char) => char + rev ,'');


// return str.split('').reverse().join('');


// let strArr = str.split('');
//     let result="";

//     for(let char of strArr){
//         result = char +result
//     }
//     return result;


// let strArr = str.split('');
//     let result="";

//     for(let i= strArr.length-1 ; i>=0 ; i--){
//         result += strArr[i];
//     }
//     return result;


module.exports = reverse;
