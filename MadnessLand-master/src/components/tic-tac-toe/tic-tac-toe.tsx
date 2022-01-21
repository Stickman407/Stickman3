import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'tic-tac-toe',
  styleUrl: 'tic-tac-toe.css',
})
export class TicTacToe {

  @State()
  board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];

  @State() currentPlayer = 1;

  selectSquare(index: number) {
    if (this.board[index]) return;
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
      if (sum && sum % 6 === 0) return 2;
      if (sum && sum % 3 === 0) return 1;
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
    return (
      <div class="board">
        <div>
          {this.isGameOver() ? <h1>GAME OVER! P{this.isGameOver()} WINS!</h1> : <h1>Your Turn: P{this.currentPlayer}</h1>}
          <button onClick={() => this.resetBoard()}>Reset</button>
        </div>
        {this.board.map((square, index) =>
          <div
            class={{
              square: true,
              p1: square === 1,
              p2: square === 2
            }}
            onClick={() => this.selectSquare(index)}
            style={{
              pointerEvents: this.isGameOver() ? "none" : "all"
            }}
          ></div>
        )}
      </div>
    );
  }

}
