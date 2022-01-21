import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'new-component',
  styleUrl: 'new-component.css'
})
export class NewComponent {

  @Prop() external: string;

  @State() internal = 10;

  render() {
    return (
      <Host>
        <b>{this.external}</b>
      </Host>
    );
  }

}
