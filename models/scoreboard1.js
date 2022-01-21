class scoreboard {
  score = 0;
  el = null;

  constructor(score) {
    this.score = this.el = document.createElement("div");
    this.score.textContent = this.score;
    this.el.style.background = "red";
    document.body.appendChild(this.el);
    document.body.appendChild(this.score);
  }

  add(points) {
    this.score = this.score + points;
    pointsEl.textContent = this.points;
  }

  remove(points) {
    this.score = this.score - this.points;
    pointsEl.textContent = this.points;
  }
}
const board = new scoreboard();
board.add(10);
setTimeout(() => {
  board.remove(3);
}, 3000);

console.log(board);
