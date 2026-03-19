import type p5 from 'p5'
import Circle from '../objects/MouseScaleCircle'
import { flashBackground } from '../utils/colors'

export default function sketch(p: p5, width: number, height: number) {
  const circles: Circle[] = []
  let count = 0
  const amplitude = 80

  p.setup = () => {
    p.createCanvas(width, height)
    flashBackground(p)

    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(p, x, height / 2))
    }
    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(p, x, height / 2))
    }
    for (let x = 0; x <= width + 32; x += 16) {
      circles.push(new Circle(p, x, height / 2))
    }
  }

  p.draw = () => {
    flashBackground(p)

    circles.forEach((circle, i) => {
      circle.update()
      circle.location.y = height / 2 + amplitude * p.sin(count + i / 2)
      circle.draw()
    })

    count += 0.01
  }
}
