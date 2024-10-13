import gsap from 'gsap'

let cursor: HTMLElement | null = null
let lastX: number = 0
let lastY: number = 0
let lastSize: number = 20
let rafId: number | null = null

const animateCursor = (
  x: number,
  y: number,
  size: number,
  duration: number = 0.3
) => {
  if (!cursor) return

  const transform: number = size / 2

  gsap.to(cursor, {
    width: size,
    height: size,
    left: x - transform,
    top: y - transform,
    ease: 'power2.out',
    overwrite: true,
    duration: duration
  })
}

const handleMouseMove = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const cursorSize: number = target.tagName.toLowerCase() === 'a' ? 40 : 20

  if (e.clientX !== lastX || e.clientY !== lastY || cursorSize !== lastSize) {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
    }
    rafId = requestAnimationFrame(() => {
      animateCursor(e.clientX, e.clientY, cursorSize)
    })

    lastX = e.clientX
    lastY = e.clientY
    lastSize = cursorSize
  }
}

const initCursor = () => {
  cursor = document.getElementById('cursor')
  if (!cursor) return

  animateCursor(lastX, lastY, lastSize, 0)

  document.addEventListener('mousemove', handleMouseMove)
}

const cleanup = () => {
  document.removeEventListener('mousemove', handleMouseMove)
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
}

document.addEventListener('astro:page-load', () => {
  initCursor()
  document.addEventListener('astro:before-preparation', cleanup)
})

document.addEventListener('astro:before-preparation', () => {
  if (cursor) {
    const rect = cursor.getBoundingClientRect()
    lastX = rect.left + rect.width / 2
    lastY = rect.top + rect.height / 2
    lastSize = rect.width
  }
})

document.addEventListener('astro:after-swap', initCursor)

window.addEventListener('load', () => {
  if (lastX === 0 && lastY === 0) {
    lastX = window.innerWidth / 2
    lastY = window.innerHeight / 2
  }
  initCursor()
})
