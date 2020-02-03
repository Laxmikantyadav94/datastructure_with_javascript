// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counterArr =[0];
    const arr= [root,'s'];
 
    while(arr.length>1){
        const node= arr.shift();
        console.log("array..",arr)
        if(node === 's'){
            arr.push(node);
            counterArr.push(0);
        }else{
            counterArr[counterArr.length-1] +=1;
            arr.push(...node.children);
        }
    }

    return counterArr;
}

module.exports = levelWidth;
