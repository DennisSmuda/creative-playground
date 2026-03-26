import type p5 from 'p5'
import BasicMover from './BasicMover'

export default class MouseMover extends BasicMover {
  constructor(sk: p5, x: number, y: number) {
    super(sk, x, y)
  }

  update() {
    const mouse = this.sk.createVector(this.sk.mouseX, this.sk.mouseY)
    const dir = p5.Vector.sub(mouse, this.location)
    dir.normalize()
    dir.mult(0.5)
    this.applyForce(dir)

    this.velocity.add(this.accelleration).limit(this.maxSpeed)
    this.location.add(this.velocity)
    this.accelleration.mult(0)
    this.wrapAroundScreen()
  }
}
