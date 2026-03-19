import p5 from 'p5'
import { BasicMover } from './BasicMover'
import sketch from './sketch'

/**
 * MouseMover Class
 */
export class MouseMover extends BasicMover {
  mouse: p5.Vector
  dir: p5.Vector

  constructor(sk: p5, width: number, height: number) {
    super(sk, width, height)
    this.mouse = sk.createVector(0, 0)
    this.dir = sk.createVector(0, 0)
    this.location = sk.createVector(0, 0)
  }

  update() {
    this.mouse = this.sk.createVector(this.sk.mouseX, this.sk.mouseY)
    this.dir = p5.Vector.sub(this.mouse, this.location)
    this.dir.normalize()
    this.dir.mult(0.5)
    this.accelleration = this.dir
    this.velocity.add(this.accelleration).limit(this.maxSpeed)
    this.location.add(this.velocity)
    this.wrapAroundScreen()
  }
}

export default sketch(MouseMover)
