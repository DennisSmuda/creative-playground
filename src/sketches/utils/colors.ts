import type p5 from 'p5'
/**
 * Flash Background Color
 *
 * @param {p5Instance} sk
 */
function flashBackground(sk: p5) {
  sk.colorMode('hsl')
  sk.background(226, 33, 10, 1)
}

/**
 * Get Random Color
 *
 * @param {p5Instance} sk
 * @returns a bright primary p5-color
 */
function getRandomColor(sk: p5) {
  return sk.color(sk.random(255), sk.random(50, 100), 50, 1)
}

export { flashBackground, getRandomColor }
