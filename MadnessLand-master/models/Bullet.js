class Bullet {
  color = "yellow";
  x = 0;
  y = 0;
  el = null;

  constructor(x = 0, y = 0) {
    this.el = document.createElement("div");
    this.el.style.position = "absolute";
    this.el.style.height = "10px";
    this.el.style.width = "10px";
    this.el.style.background = this.color;
    this.el.style.left = `${x}%`;
    this.el.style.top = `${y}%`;
    // Tweening Key Frames ( -> )
    this.el.style.transition = "1s ease-in left";
    document.body.appendChild(this.el);
  }

  setColor(color) {
    this.color = color;
    this.el.style.background = this.color;
  }

  fire() {
    this.el.style.opacity = `1`;
    this.el.style.left = `100%`;
    setTimeout(() => {
      this.el.style.opacity = `0`;
      this.el.style.left = `0%`;
    }, 1000);
  }
}
const bullet1 = new Bullet();
const bullet2 = new Bullet(0, 30);

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    bullet1.fire();
  }
});
