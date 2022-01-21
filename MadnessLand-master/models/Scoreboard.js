class Scoreboard {
  score = 0;
  el = null;

  constructor(score) {
    this.score = score || 0;
    this.el = document.createElement("div");
    this.el.textContent = this.score;
    this.el.id = "editor";
    document.body.appendChild(this.el);
  }

  add(points) {
    console.log(points, this.score);
    this.score = this.score + points;
    this.el.textContent = this.score;
    // Do math and save to score property (look at tank where we manipulated x and y)
    // Update this.el text to the score
  }

  remove(points) {
    console.log(points, this.score);
    this.score = this.score - points;
    this.el.textContent = this.score;
    // Do math and save to score property (look at tank where we manipulated x and y)
    // Update this.el text to the score
  }
}
