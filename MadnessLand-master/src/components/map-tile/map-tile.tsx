import { Component, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'map-tile',
  styleUrl: 'map-tile.css'
})
export class MapTile {

  @Prop() terrain: "grass" | "land" | "water" = "grass";

  @Method()
  async setTerrain(terrain) {
    this.terrain = terrain;
  }

  render() {
    return (
      <span class={this.terrain}></span>
    );
  }

}
