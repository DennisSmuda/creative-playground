import p5 from 'p5'

const Vector = p5.Vector

export class BasicMover {
  sk: p5
  location: p5.Vector
  accelleration: p5.Vector
  velocity: p5.Vector
  color: p5.Color
  mass: number
  maxSpeed: number
  width: number
  height: number

  constructor(sk: p5, x: number, y: number) {
    this.sk = sk
    this.location = sk.createVector(x, y)
    this.accelleration = sk.createVector(0, 0)
    this.velocity = sk.createVector(0, 0)
    this.color = sk.color(255, 0, 0)
    this.mass = sk.random(4, 16)
    this.maxSpeed = this.mass

    const { innerWidth: width, innerHeight: height } = window
    this.width = width
    this.height = height
  }

  applyForce(force: p5.Vector) {
    const f = Vector.div(force, this.mass)
    this.accelleration.add(f)
  }

  draw() {
    this.sk.noStroke()
    this.sk.fill(this.color)
    this.sk.ellipse(this.location.x, this.location.y, this.mass)
  }

  wrapAroundScreen() {
    if (this.location.x > this.width) {
      this.location.x = 1
    }
    else if (this.location.x < 0) {
      this.location.x = this.width
    }

    if (this.location.y > this.height) {
      this.location.y = 1
    }
    else if (this.location.y < 0) {
      this.location.y = this.height
    }
  }

  bounceEdges() {
    if (this.location.x > this.width) {
      this.location.x = this.width
      this.velocity.x *= -1
    }
    else if (this.location.x < 0) {
      this.location.x = 0
      this.velocity.x *= -1
    }

    if (this.location.y > this.height) {
      this.location.y = this.height
      this.accelleration.y *= -1
    }
  }
}

/** Sketch function expected by P5Wrapper: (p, width, height) => void */
export default function sketch(p: p5, width: number, height: number) {
  let mover: BasicMover

  p.setup = () => {
    p.createCanvas(width, height)
    mover = new BasicMover(p, width / 2, height / 2)
  }

  p.draw = () => {
    p.background(220)
    const gravity = p.createVector(0, 0.1)
    mover.applyForce(gravity)
    mover.velocity.add(mover.accelleration)
    mover.location.add(mover.velocity)
    mover.accelleration.mult(0)
    mover.bounceEdges()
    mover.draw()
  }
}
