import { Component, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'map-editor',
  styleUrl: 'map-editor.css'
})
export class MapEditor {
  terrains = ["grass", "land", "water"];

  @Prop() size: number;

  @State() tiles: number[] = [];

  @Listen("click")
  onClick(event) {
    const currentTerrainClass = event.target.classList[0];
    const currentIndex = this.terrains.indexOf(currentTerrainClass);
    const nextIndex =
      currentIndex + 1 >= this.terrains.length ? 0 : currentIndex + 1;
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
    return (
      <div id="editor">
        {this.tiles.map(_tile => <map-tile></map-tile>)}
      </div>
    );
  }

}
