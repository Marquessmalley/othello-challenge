const potentialMoves = [
  [3, 5],
  [2, 4],
  [2, 6],
  [5, 2],
  [1, 3],
  [3, 6],
  [5, 7],
  [1, 6],
  [0, 2],
  [5, 3],
  [6, 3],
  [6, 4],
  [5, 1],
  [4, 2],
  [6, 6],
  [7, 7],
  [7, 4],
  [4, 7],
  [7, 2],
  [4, 0],
  [2, 2],
  [0, 4],
  [7, 1],
  [7, 6],
  [0, 6],
  [2, 1],
  [6, 0],
  [1, 7],
  [1, 0],
  [0, 0],
];

function getMove(player, board) {
  // TODO: Determine valid moves
  // TODO: Determine best move
  console.log("current player: ", player);
  console.log("board state: ", board);

  const playerMove = potentialMoves.find((move) => {
    const row = move[0];
    const col = move[1];
    return player === 1 && board[row][col] === 0;
  });

  return playerMove;
}

function prepareResponse(move) {
  console.log("player move", move);
  const response = `${JSON.stringify(move)}\n`;
  console.log(`Sending response ${response}`);
  return response;
}

module.exports = { getMove, prepareResponse };
