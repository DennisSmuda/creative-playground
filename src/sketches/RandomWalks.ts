import type p5 from 'p5'
import Walker from './objects/Walker'
import { flashBackground } from './utils/colors'

export default function sketch(p: p5, width: number, height: number) {
  const objects: Walker[] = []

  p.setup = () => {
    p.createCanvas(width, height)
    flashBackground(p)

    objects.push(new Walker(p, width / 2, height / 2))
    objects.push(new Walker(p, width / 2, height / 2))
    objects.push(new Walker(p, width / 2, height / 2))
    objects.push(new Walker(p, width / 4, height / 4))
    objects.push(new Walker(p, width, height))
    objects.push(new Walker(p, 0, 0))
  }

  p.mousePressed = () => {
    flashBackground(p)
  }

  p.draw = () => {
    objects.forEach((obj) => {
      obj.update()
      obj.draw()
    })
  }
}
