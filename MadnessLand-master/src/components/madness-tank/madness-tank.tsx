import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'madness-tank',
  styleUrl: 'madness-tank.css'
})
export class MadnessTank {
  movementSpeed = 15;
  el = null;
  orientation = 0;

  @State() x = 0;
  @State() y = 0;

  @Listen("keydown", { target: "body" })
  onKeydown(event) {
    if (event.key === "ArrowUp") {
      this.setOrientation(0);
      this.move(0, -this.movementSpeed);
    } else if (event.key === "ArrowDown") {
      this.setOrientation(180);
      this.move(0, this.movementSpeed);
    } else if (event.key === "ArrowLeft") {
      this.setOrientation(270);
      this.move(-this.movementSpeed, 0);
    } else if (event.key === "ArrowRight") {
      this.setOrientation(90);
      this.move(this.movementSpeed, 0);
    } else if (event.key === "Shift") {
      this.fire();
    }
  }

  setOrientation(degrees) {
    // Set orientation in degrees
    this.orientation = degrees;
    // Update the HTML element styles
    this.el.style.transform = `rotate(${degrees}deg)`;

    return this;
  }

  move(x, y) {
    // Change the positioning
    this.x = this.x + x;
    this.y = this.y + y;

    return this;
  }

  fire() {
    const bulletEl = document.createElement("span");
    bulletEl.classList.add("bullet");
    bulletEl.style.top = `${this.y}px`;
    bulletEl.style.left = `${this.x}px`;
    document.body.append(bulletEl);
  }

  render() {
    return (
      <span
        ref={(el) => this.el = el}
        style={{
          position: "absolute",
          transition: "0.3s linear all",
          background: "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat",
          height: "60px",
          width: "60px",
          left: `${this.x}px`,
          top: `${this.y}px`
        }} />
    );
  }

}
