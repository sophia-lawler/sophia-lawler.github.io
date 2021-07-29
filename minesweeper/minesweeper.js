
// MINESWEEPER GAME BEGINS

document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ 
    {
      row:0,
      col:0,
      hidden: true,
      isMine: false
    },
    {
      row:0,
      col:1,
      hidden: true,
      isMine: false
    },
    {
      row:0,
      col:2,
      hidden: true,
      isMine: false
    },
    {
      row:0,
      col:3,
      hidden: true,
      isMine: false
    },
    {
      row:0,
      col:4,
      hidden: true,
      isMine: false
    },
    {
      row:1,
      col:0,
      hidden: true,
      isMine: false
    },
    {
      row:1,
      col:1,
      hidden: true,
      isMine: false
    },
    {
      row:1,
      col:2,
      hidden: true,
      isMine: false
    },
    {
      row:1,
      col:3,
      hidden: true,
      isMine: false
    },
    {
      row:1,
      col:4,
      hidden: true,
      isMine: false
    },
    {
      row:2,
      col:0,
      hidden: true,
      isMine: false
    },
    {
      row:2,
      col:1,
      hidden: true,
      isMine: false
      
    },
    {
      row:2,
      col:2,
      hidden: true,
      isMine: false
    },
    {
      row:2,
      col:3,
      hidden: true,
      isMine: false
    },
    {
      row:2,
      col:4,
      hidden: true,
      isMine: false
    },
    {
      row:3,
      col:0,
      hidden: true,
      isMine: false
    },
    {
      row:3,
      col:1,
      hidden: true,
      isMine: false
    },
    {
      row:3,
      col:2,
      hidden: true,
      isMine: false
    },
    {
      row:3,
      col:3,
      hidden: true,
      isMine: false
    },
    {
      row:3,
      col:4,
      hidden: true,
      isMine: false
    },
    {
      row:4,
      col:0,
      hidden: true,
      isMine: false
    },
    {
      row:4,
      col:1,
      hidden: true,
      isMine: false
    },
    {
      row:4,
      col:2,
      hidden: true,
      isMine: false
    },
    {
      row:4,
      col:3,
      hidden: true,
      isMine: false
    },
    {
      row:4,
      col:4,
      hidden: true,
      isMine: false
    }
  ]
}

function startGame () {
  for (let i = 0; i < board.cells.length; i++ ) {
    board.cells[i].isMine = Math.random() < 0.3
  }
  for (let i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    console.log(board.cells)
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  document.addEventListener("click", checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {  
  var didWin = true
  for (let i = 0; i < board.cells.length; i++ ) {
    var cell = board.cells[i]
    if (cell.hidden && !cell.isMine) {
      didWin = false
    }
    else if ( !cell.isMarked && cell.isMine) {
      didWin = false
    }
  
    else if (didWin) {
      lib.displayMessage('You win!')
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

}
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) { 
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var mineFind = surroundingCells.filter(cell => cell.isMine === true);
  return mineFind.length
}

//MINESWEEPER GAME FINISHED

