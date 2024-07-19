import { IconXMark } from '@/utils/icons'
import clsx from 'clsx'
import { useEffect, useId, type HTMLProps } from 'react'

interface Props {
  frame?: 'light' | 'dark'
  className?: HTMLProps<HTMLElement>['className']
  children: React.ReactNode
  draggable?: boolean
}

export default function WindowFrame({
  frame = 'light',
  className,
  children,
  draggable = false
}: Props) {
  const id = useId()

  useEffect(() => {
    if (!draggable) return

    const frameId = `wFrame-${id}`

    const frame: HTMLDivElement | null = document.querySelector(
      `#${CSS.escape(frameId)}`
    )
    const header: HTMLDivElement | null = document.querySelector(
      `#${CSS.escape(frameId)}-header`
    )

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0

    const onMove = (clientX: number, clientY: number) => {
      posX = mouseX - clientX
      posY = mouseY - clientY
      mouseX = clientX
      mouseY = clientY
      if (frame) {
        frame.style.top = frame.offsetTop - posY + 'px'
        frame.style.left = frame.offsetLeft - posX + 'px'
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault()
      onMove(e.clientX, e.clientY)
    }

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      onMove(touch.clientX, touch.clientY)
    }

    const onEnd = () => {
      document.removeEventListener('mouseup', onEnd)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchend', onEnd)
      document.removeEventListener('touchmove', onTouchMove)
    }

    const onStart = (clientX: number, clientY: number) => {
      mouseX = clientX
      mouseY = clientY
      document.addEventListener('mouseup', onEnd)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('touchend', onEnd)
      document.addEventListener('touchmove', onTouchMove)
    }

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      onStart(e.clientX, e.clientY)
    }

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      onStart(touch.clientX, touch.clientY)
    }

    if (header) {
      header.onmousedown = onMouseDown
      header.ontouchstart = onTouchStart
    }

    return () => {
      if (header) {
        header.onmousedown = null
        header.ontouchstart = null
      }
      document.removeEventListener('mouseup', onEnd)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchend', onEnd)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [id, draggable])

  return (
    <div
      id={`wFrame-${id}`}
      className={clsx(
        'border-2 bg-black z-10 flex flex-col',
        frame == 'light' ? 'border-gray-100' : 'border-zinc-900',
        className,
        draggable && 'absolute'
      )}
    >
      <div
        id={`wFrame-${id}-header`}
        className={clsx(
          'flex justify-end py-1.5 pr-2',
          frame == 'light' ? 'bg-white' : 'bg-zinc-800',
          draggable && 'cursor-grab'
        )}
      >
        <IconXMark
          className={clsx(
            'w-4 h-4 cursor-not-allowed',
            frame != 'light' ? 'text-white' : 'text-zinc-700'
          )}
        />
      </div>
      {children}
      {/* <div className='w-full flex-1 overflow-y-auto'>{children}</div> */}
      {/* <div
        id={`wFrame-${id}-header`}
        className={clsx(
          'flex justify-end py-1.5 pr-2',
          frame == 'light' ? 'bg-white' : 'bg-zinc-800',
          draggable && 'cursor-grab'
        )}
      >
        <IconXMark
          className={clsx(
            'w-4 h-4 cursor-not-allowed',
            frame != 'light' ? 'text-white' : 'text-zinc-700'
          )}
        />
      </div>
      {children} */}
    </div>
  )
}
