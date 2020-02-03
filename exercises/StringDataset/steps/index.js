// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row =0,result = "") {
    if(row ===n){
        return;
    }

    if(result.length ===n){
        console.log(result);
        return steps(n,row+1);
    }
    if(result.length <=row){
        result += "#";
    }else{
        result += " ";
    }

    return steps(n,row,result);
}

module.exports = steps;


// function steps(n) {
//     for(let row=1 ; row <= n; row++){
//         let result="";
//         for(let col=1; col <=n; col ++){
//             if(col <=row){
//                 result += "#";
//             }else{
//                 result += " ";
//             }
//         }
//         console.log(result);
//     }

// }