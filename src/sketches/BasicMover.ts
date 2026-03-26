import p5 from 'p5'
import sketch from './sketch'

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

  constructor(sk: p5, width: number, height: number) {
    this.sk = sk
    this.location = sk.createVector(width / 2, height / 2)
    this.accelleration = sk.createVector(0, 0)
    this.velocity = sk.createVector(0, 0)
    this.color = sk.color(255, 0, 0)
    this.mass = sk.random(4, 16)
    this.maxSpeed = this.mass
    this.width = width
    this.height = height
  }

  applyForce(force: p5.Vector) {
    const f = Vector.div(force, this.mass)
    this.accelleration.add(f)
  }

  update() {
    const gravity = this.sk.createVector(0, 0.1)
    this.applyForce(gravity)
    this.velocity.add(this.accelleration)
    this.location.add(this.velocity)
    this.accelleration.mult(0)
    this.bounceEdges()
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

export default sketch(BasicMover)
