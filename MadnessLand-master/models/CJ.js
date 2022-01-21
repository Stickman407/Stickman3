export default class Cj {
  el = null;
  isRound = false;

  constructor() {
    this.el = document.createElement("div");
    this.el.disabled = true;
    this.el.style.height = "100px";
    this.el.style.width = "100px";
    this.el.style.background = "purple";
    this.el.style.transition = "1s ease all";
    this.el.addEventListener("click", (event) => {
      this.el.style.borderRadius = this.isRound ? "0" : "100%";
      this.isRound = !this.isRound;
    });
    document.body.appendChild(this.el);
  }
}
