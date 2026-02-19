import p5 from 'p5'
import { BasicMover } from './BasicMover.ts'

/**
/**
 * MouseMover Class
 */
export class MouseMover extends BasicMover {
  mouse: p5.Vector
  dir: p5.Vector
  location: p5.Vector

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

export default function sketch(p: p5, width: number, height: number) {
  // let mover: MouseMover
  const mover = new MouseMover(p, width, height)
  p.setup = () => {
    p.createCanvas(width, height)
  }
  p.draw = () => {
    mover.update()
  }
}
