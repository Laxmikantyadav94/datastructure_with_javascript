// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,row =0,result="") {
    if(row === n){
        return;
    }
    if(result.length === (2*n-1)){
        console.log(result);
        return pyramid(n,row+1);
    }

    let mid = Math.floor((2*n -1)/2);

    if(mid - row <=result.length && mid+row >=result.length){
        result += "#";
    }else{
        result += " ";
    }
    return pyramid(n,row,result);
}

module.exports = pyramid;

// function pyramid(n) {
//     const mid = Math.floor((2*n -1)/2);

//     for(let row=0; row<n ; row++){
//         let result ="";
//         for(let col=0; col < 2*n-1; col++){
//             if(mid - row <=col && mid+row >=col){
//                 result += "#";
//             }else{
//                 result += " ";
//             }
//         }
//         console.log(result);
//     }
// }

// function pyramid(n) {
//     for(let row=0; row<n ; row++){
//         let result ="";
//         debugger;
//         for(let col=0; col<n; col++){
//             if(col<=row){
//                 result +="#";
//             }else{
//                 result += " ";
//             }
//         }

//         for(let nCol = -1; nCol > -n ; nCol --){
//             if(nCol*-1<=row){
//                 result ="#"+result;
//             }else{
//                 result = " "+result;
//             }
//         }
//         console.log(result);
//     }
// }
