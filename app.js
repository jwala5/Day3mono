var board = [10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
  150,
  160
];
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(board.length);
console.log(player1_button);
console.log(player2_button);
player1_button.addEventListener("click", rolldice_1);
player2_button.addEventListener("click", rolldice_2);
var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEPrep", 0, 1000];

function rollDice_1() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player one rolls", position);
  changePosition_1(player1[1], position);
}

function rollDice_2() {
  let position = Math.floor(Math.random() * 6) + 1;
  console.log("Player two rolls", position);
  changePosition_2(player2[1], position);
}

function changePosition_1(old, currentPos) {
  var newPosition = old + currentPos;
  player1[1] = newPosition;
  console.log("player-1", player1[1]);
  changeMoney_1(player1[1]);
}

function changePosition_2(old, currentPos) {
  var newPosition = old + currentPos;
  player2[1] = newPosition;
  console.log("player-2", player2[1]);
  changeMoney_2(player2[1]);
}

function changeMoney_1(p1) {
  var updateMoney = 0;
  if (p1 < board.length) {
    updateMoney = player1[2] - board[p1 - 1];
  } else {
    p1 = p1 % 15;
    updateMoney = player1[2] - board[p1 - 1];
  }
  player1[2] = updateMoney;
  console.log("player-1 money", player1[2]);
}

function changeMoney_2(p1) {
  var updateMoney = 0;
  if (p1 < board.length) updateMoney = player2[2] - board[p1 - 1];
  else {
    p1 = p1 % 15;
    updateMoney = player2[2] - board[p1 - 1];
  }
  player2[2] = updateMoney;
  console.log("player-2 money", player2[2]);
}