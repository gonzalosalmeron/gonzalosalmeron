const CHAR_HEIGHT = 22
const CHAR_WIDTH = 9.6
const BINARY_CHARS = ['0', '1']
const CUSTOM_CHARS = ['G', 'S']
const TOP_PART = document.getElementById('top-part')
const BOTTOM_PART = document.getElementById('bottom-part')

const initializeScreen = () => {
  const { innerWidth, innerHeight } = window
  const rows = Math.floor(innerHeight / CHAR_HEIGHT)
  const cols = Math.floor(innerWidth / CHAR_WIDTH)

  if (TOP_PART && BOTTOM_PART) {
    TOP_PART.textContent = createTextGrid(rows / 2, cols)
    BOTTOM_PART.textContent = createTextGrid(rows / 2, cols)
  }
}

const updateCharAtPosition = (str: string, col: number): string => {
  const randomChar =
    BINARY_CHARS[Math.floor(Math.random() * BINARY_CHARS.length)]
  return str.substring(0, col) + randomChar + str.substring(col + 1)
}

const createTextGrid = (rows: number, cols: number): string => {
  return Array(rows)
    .fill(0)
    .map(() =>
      Array(cols)
        .fill(0)
        .map(
          () => CUSTOM_CHARS[Math.floor(Math.random() * CUSTOM_CHARS.length)]
        )
        .join('')
    )
    .join('\n')
}

const convertToZerosRandomly = (changesPerFrame: number = 50) => {
  const topPartChars = TOP_PART?.textContent?.split('\n') || []
  const bottomPartChars = BOTTOM_PART?.textContent?.split('\n') || []

  if (!topPartChars.length || !bottomPartChars.length) return

  const rows = topPartChars.length
  const cols = topPartChars[0].length

  let randomPositions = Array.from({ length: rows * cols }, (_, i) => i)
  randomPositions = randomPositions.sort(() => Math.random() - 0.5)

  let index = 0

  const animate = () => {
    if (index < randomPositions.length) {
      for (
        let i = 0;
        i < changesPerFrame && index < randomPositions.length;
        i++
      ) {
        const pos = randomPositions[index]
        const row = Math.floor(pos / cols)
        const col = pos % cols

        topPartChars[row] = updateCharAtPosition(topPartChars[row], col)
        bottomPartChars[row] = updateCharAtPosition(bottomPartChars[row], col)

        index++
      }

      if (TOP_PART && BOTTOM_PART) {
        TOP_PART.textContent = topPartChars.join('\n')
        BOTTOM_PART.textContent = bottomPartChars.join('\n')
      }

      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

const splitScreen = () => {
  const mainContent = document.getElementById('main-content')
  const binaryScreen = document.getElementById('binary-screen')

  if (!TOP_PART || !BOTTOM_PART) return
  TOP_PART.style.transition = 'transform 1s ease-in-out'
  TOP_PART.style.transform = 'translateY(-100%)'
  BOTTOM_PART.style.transition = 'transform 1s ease-in-out'
  BOTTOM_PART.style.transform = 'translateY(100%)'

  BOTTOM_PART.addEventListener('transitionend', () => {
    if (binaryScreen) binaryScreen.remove()
    document.body.style.overflow = 'unset'

    if (mainContent) {
      mainContent.style.transition = 'opacity 1s'
      mainContent.style.opacity = '1'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initializeScreen()
  const mainContent = document.getElementById('main-content')
  if (mainContent) {
    mainContent.style.opacity = '0'
    document.body.style.overflow = 'hidden'
  }

  setTimeout(() => {
    convertToZerosRandomly()
    setTimeout(splitScreen, 1.2 * 1000)
  }, 0.7 * 1000)
})
