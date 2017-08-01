function sudoku(puzzle) {
  var nextIndex = findNextIndex(puzzle);
	if (nextIndex === null) return puzzle;
	
  var x = nextIndex.i;
	var y = nextIndex.j;

  for (var i = 1; i < 10; i++) {
    puzzle[x][y] = i;
		if (validAddition(x, y, puzzle, i) && sudoku(puzzle))  return puzzle;
		puzzle[x][y] = 0;
  }
}

function findNextIndex(puzzle){
  for (var i = 0; i < puzzle.length; i++) {
    for (var j = 0; j < puzzle[0].length; j++) {
      if (puzzle[i][j] === 0) return {i: i, j: j};
    }
  }			
	return null;
}

function validAdditionSquare(row, col, puzzle, compare){
  var rowGroup = Math.floor(row/3);
	var colGroup = Math.floor(col/3);

  for (var i = rowGroup*3; i < rowGroup*3+3; i++){
    for (var j = colGroup*3; j < colGroup*3+3; j++){
      if ((row !== i || col !== j) && puzzle[i][j] === compare) return false;
    }
  }
	return true;
}

function validAdditionColumn(row, col, puzzle, compare){
  for (var i = 0; i < 9; i++){
		if (i !== row && puzzle[i][col] === compare) return false;
  }
	return true;
 }
 
function validAdditionRow(row, col, puzzle, compare){
	for (var i = 0; i < 9; i++){
		if (i !== col && puzzle[row][i] === compare) return false;
  }
  return true;
}

function validAddition(row, col, puzzle, compare) {
  return validAdditionSquare(row, col, puzzle, compare) 
		&& validAdditionColumn(row, col, puzzle, compare) 
		&& validAdditionRow(row, col, puzzle, compare);
}