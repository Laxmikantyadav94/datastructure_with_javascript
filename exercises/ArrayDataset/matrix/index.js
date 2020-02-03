// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result =[];
    let counter=1;
    for(let i=0; i<n; i++){
        result[i]=[];
    }

    let rowStart=0;
    let rowEnd =n-1;
    let colStart =0;
    let colEnd= n-1;

    while(rowStart <= rowEnd && colStart <= colEnd){
      //top
      for(let i = colStart ; i <=colEnd; i++){
        result[rowStart][i]=counter;
        counter++;
      }
      rowStart++;

      //right
      for(let i=rowStart;i<=rowEnd;i++){
          result[i][colEnd]= counter;
          counter++;
      }
      colEnd--;

      //bottom
      for(let i=colEnd; i>=colStart; i--){
        result[rowEnd][i]=counter;
        counter++;
      }
      rowEnd--;

      //left
      for(let i=rowEnd; i>=rowStart; i--){
          result[i][colStart]=counter;
          counter++;
      }
      colStart++;
    }

    return result;

}

module.exports = matrix;
