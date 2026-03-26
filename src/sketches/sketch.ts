import type p5 from 'p5'
import type { BasicMover } from './BasicMover'

type MoverConstructor = new (sk: p5, width: number, height: number) => BasicMover

export default function sketch(MoverClass: MoverConstructor) {
  return (p: p5, width: number, height: number) => {
    let mover: BasicMover

    p.setup = () => {
      p.createCanvas(width, height)
      mover = new MoverClass(p, width, height)
    }

    p.draw = () => {
      p.background(220)
      mover.update()
      mover.draw()
    }
  }
}
