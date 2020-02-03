// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for(let i=0 ; i< arr.length; i++){
        for(let j=0; j<arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    let indexOfLowest;
    
    for(let i=0 ; i<arr.length; i++){
        indexOfLowest = i;

        for(let j= i+1; j<arr.length; j++){
            if(arr[j] < arr[indexOfLowest]){
                indexOfLowest =j;
            }
        }

        if(i != indexOfLowest){
            let temp = arr[i];
            arr[i]= arr[indexOfLowest];
            arr[indexOfLowest]= temp;
        }
    }

    return arr;
}

function mergeSort(arr) {

    if(arr.length ===1){
        return arr;
    }

    const center = Math.floor(arr.length /2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    let result =[];

    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }


    return [...result,...left,...right  ];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
