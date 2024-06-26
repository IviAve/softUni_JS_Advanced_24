function diagonalSums(matrix) {
    
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let size = matrix.length;

    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][size - i - 1];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

diagonalSums([[20, 40],
    [10, 60]]
   )
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )

//    A square matrix of numbers comes as an array of arrays, each array holding numbers.
//     Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space.
//  First print the sum at the main diagonal, then the sum at the secondary diagonal.


