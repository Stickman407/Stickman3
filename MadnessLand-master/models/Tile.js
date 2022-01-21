class Tile {
  el = null;
  terrain = "grass";
  terrains = ["grass", "land", "water"];
  destructible = false;

  constructor() {
    this.el = document.createElement("span");
    const editorEl = document.querySelector("#editor");
    editorEl.appendChild(this.el);

    this.el.addEventListener("click", (event) => {
      console.log(event);
      // Cycle through terrain classes on click
      const currentTerrainClass = event.target.classList[0];
      const currentIndex = this.terrains.indexOf(currentTerrainClass);
      const nextIndex =
        currentIndex + 1 >= this.terrains.length ? 0 : currentIndex + 1;
      const newTerrain = this.terrains[nextIndex];
      event.target.classList.add(newTerrain);
      event.target.classList.remove(currentTerrainClass);
    });
  }

  setTerrain(terrain) {
    this.terrain = terrain;
    this.el.classList.add(terrain);
  }
}
