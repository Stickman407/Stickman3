import Tile from "./Tile";

export default class MapEditor {
  // Define Attributes
  size = 640;

  // ON LOAD
  constructor(size) {
    this.size = size;
    // console.log(this);
    for (let index = 0; index < 8192 / 4; index++) {
      const newTile = new Tile();
      newTile.setTerrain("grass");
      // console.log(newTile);
    }
  }
}

// const Deez = new MapEditor(960);
