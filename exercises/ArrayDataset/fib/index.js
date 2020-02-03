// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n) - as for every increment in input value fib will be executed one only.
function memorizedfib(fn) {
    let cache ={};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this,args);
        cache[args]=result;
        return result;

    }

}
function slowfib(n) {
    if(n <2){
        return n;
    }

   return fib(n-1)+fib(n-2); // this calls memorized function 
}

const fib = memorizedfib(slowfib);
module.exports = fib;

// O(2^n) - not to go with
// function fib(n) {
//     if(n <2){
//         return n;
//     }

//    return fib(n-1)+fib(n-2);
// }

// O(n) complexity
// function fib(n) {
//     let last =1;
//     let secLast =0;

//     for(let i=2;i <=n ;i++){
//         let num = last + secLast;
//         secLast = last;
//         last = num;
//     }

//     return last;
// }
