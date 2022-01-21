import { r as registerInstance, h } from './index-a9bdaee2.js';

const ticTacToeCss = ":root{--player-color:red;--p1-color:red;--p2-color:blue}.board{height:600px;width:600px;margin:60px auto;padding:0}.board .square{box-sizing:border-box;display:inline-block;width:200px;height:200px;margin:0 auto;background:#ccc;padding:0}.board .square:hover{cursor:pointer;border:2px dotted green}.board .square.p1{background:var(--p1-color)}.board .square.p2{background:var(--p2-color)}";

let TicTacToe = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.board = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ];
    this.currentPlayer = 1;
  }
  selectSquare(index) {
    if (this.board[index])
      return;
    this.board[index] = this.currentPlayer;
    this.board = [...this.board];
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }
  isGameOver() {
    const sums = {
      row1: this.board[0] && this.board[1] && this.board[2] ? (this.board[0] + this.board[1] + this.board[2]) : 0,
      row2: this.board[3] && this.board[4] && this.board[5] ? (this.board[3] + this.board[4] + this.board[5]) : 0,
      row3: this.board[6] && this.board[7] && this.board[8] ? (this.board[6] + this.board[7] + this.board[8]) : 0,
      col1: this.board[0] && this.board[3] && this.board[6] ? (this.board[0] + this.board[3] + this.board[6]) : 0,
      col2: this.board[1] && this.board[4] && this.board[7] ? (this.board[1] + this.board[4] + this.board[7]) : 0,
      col3: this.board[2] && this.board[5] && this.board[8] ? (this.board[2] + this.board[5] + this.board[8]) : 0,
      diag1: this.board[0] && this.board[4] && this.board[8] ? (this.board[0] + this.board[4] + this.board[8]) : 0,
      diag2: this.board[2] && this.board[4] && this.board[6] ? (this.board[2] + this.board[4] + this.board[6]) : 0,
    };
    for (const [_name, sum] of Object.entries(sums)) {
      if (sum && sum % 6 === 0)
        return 2;
      if (sum && sum % 3 === 0)
        return 1;
    }
    return false;
  }
  resetBoard() {
    this.board = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ];
    this.currentPlayer = 1;
  }
  render() {
    return (h("div", { class: "board" }, h("div", null, this.isGameOver() ? h("h1", null, "GAME OVER! P", this.isGameOver(), " WINS!") : h("h1", null, "Your Turn: P", this.currentPlayer), h("button", { onClick: () => this.resetBoard() }, "Reset")), this.board.map((square, index) => h("div", { class: {
        square: true,
        p1: square === 1,
        p2: square === 2
      }, onClick: () => this.selectSquare(index), style: {
        pointerEvents: this.isGameOver() ? "none" : "all"
      } }))));
  }
};
TicTacToe.style = ticTacToeCss;

export { TicTacToe as tic_tac_toe };
