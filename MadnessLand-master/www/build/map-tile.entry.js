import { r as registerInstance, h } from './index-a9bdaee2.js';

const mapTileCss = ":host{display:block}";

let MapTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.terrain = "grass";
  }
  async setTerrain(terrain) {
    this.terrain = terrain;
  }
  render() {
    return (h("span", { class: this.terrain }));
  }
};
MapTile.style = mapTileCss;

export { MapTile as map_tile };
