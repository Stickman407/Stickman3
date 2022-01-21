class Map {
  el = null;
  tileSet = [];
  name = "My Map";
  constructor() {
    this.el = document.createElement("div");
    const editorEL = document.querySelector("#editor");
    editorEL.appendChild(this.el);
  }

  setName(name) {
    this.name = name;
  }
}
