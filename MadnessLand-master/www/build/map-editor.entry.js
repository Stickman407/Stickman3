import { r as registerInstance, h } from './index-a9bdaee2.js';

const mapEditorCss = "#editor{height:640px;width:640px}#editor span{display:inline-block;height:20px;width:20px;background:white;padding:0;margin:0}#editor span:hover{background:blue}#editor span:nth-of-type(odd){background:#ccc}#editor span.grass{background:green}#editor span.land{background:rgba(248, 165, 57, 0.342)}#editor span.water{background:lightblue}";

let MapEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.terrains = ["grass", "land", "water"];
    this.tiles = [];
  }
  onClick(event) {
    const currentTerrainClass = event.target.classList[0];
    const currentIndex = this.terrains.indexOf(currentTerrainClass);
    const nextIndex = currentIndex + 1 >= this.terrains.length ? 0 : currentIndex + 1;
    const newTerrain = this.terrains[nextIndex];
    event.target.closest("map-tile").terrain = newTerrain;
  }
  componentDidLoad() {
    // console.log(this);
    for (let index = 0; index < 8192 / 4; index++) {
      this.tiles.push(index);
    }
    this.tiles = [...this.tiles];
  }
  render() {
    return (h("div", { id: "editor" }, this.tiles.map(_tile => h("map-tile", null))));
  }
};
MapEditor.style = mapEditorCss;

export { MapEditor as map_editor };
