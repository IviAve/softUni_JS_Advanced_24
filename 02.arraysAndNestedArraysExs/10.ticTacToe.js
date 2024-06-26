function ticTacToe(input) {
    
    
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
 
    let win = false;
    let player = 'X';
    let hasFreeFields = (matrix) => matrix.some(arr => arr.some(value => value === false))
    for (let i = 0; i < input.length && hasFreeFields(dashboard); i++) {
        let [row, col] = input[i].split(' ').map(num => Number(num));
 
        if (!dashboard[row][col]) {
            dashboard[row][col] = player;
 
            if (checkForWinner(dashboard, player)) {
                win = true;
                break;
            }
 
            player = player === 'X' ? 'O' : 'X'
        } else {
            console.log("This place is already taken. Please choose another!");
        }
 
    }
 
    if (win) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log("The game ended! Nobody wins :(");
    }
    dashboard.forEach(line => {
        console.log(line.join('\t'));
    });
 
    function checkForWinner(currentBoard, sign) {
        let isWinner = false;
        for (let i = 0; i < 3; i++) {
            if (currentBoard[i][0] === sign && currentBoard[i][1] === sign && currentBoard[i][2] === sign) {
                isWinner = true;
                break;
            }
            if (currentBoard[0][i] === sign && currentBoard[1][i] === sign && currentBoard[2][i] === sign) {
                isWinner = true;
                break;
            }
        }
        if (!isWinner) {
            if ((currentBoard[0][0] === sign && currentBoard[1][1] === sign && currentBoard[2][2] === sign) ||
                (currentBoard[2][0] === sign && currentBoard[1][1] === sign && currentBoard[0][2] === sign)) {
                isWinner = true;
            }
        }
        return isWinner;
    }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)
ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)


// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game,
//  so the first element of the input will be the first player's chosen coordinates,
//   the second element will be the second player's turn coordinates, and so on.
// The initial state of the dashboard is
// [[false, false, false],
// [false, false, false],
// [false, false, false]]
// The first player's mark is X and the second player's mark is O.
// Input
// One parameter:
// •	An array - the moves in a row that players make
// Output
// •	There are two players - X and O
// •	If  a player tries to make his turn on already taken place, 
// he should take his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// •	If there are no free spaces on the dashboard and nobody wins 
// the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// •	If someone wins you should print the following message and 
//  the current state of the dashboard:
// "Player {x} wins!"
// Note: When printing the state of the dashboard the elements of 
// each row of the dashboard should be separated by "\t" and each row should be on a new line.

// Constraints
// The elements in the input array will always be enough to end the game
