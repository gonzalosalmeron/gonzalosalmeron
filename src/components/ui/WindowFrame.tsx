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

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault()
      posX = mouseX - e.clientX
      posY = mouseY - e.clientY
      mouseX = e.clientX
      mouseY = e.clientY
      if (frame) {
        frame.style.top = frame.offsetTop - posY + 'px'
        frame.style.left = frame.offsetLeft - posX + 'px'
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      mouseX = e.clientX
      mouseY = e.clientY
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
    }

    if (header) {
      header.onmousedown = onMouseDown
    }

    return () => {
      if (header) {
        header.onmousedown = null
      }
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [id, draggable])

  return (
    <div
      id={`wFrame-${id}`}
      className={clsx(
        'border-2 aspect-video bg-black flex flex-col z-10',
        frame == 'light' ? 'border-white' : 'border-zinc-700',
        className,
        draggable && 'absolute'
      )}
    >
      <div
        id={`wFrame-${id}-header`}
        className={clsx(
          'flex justify-end py-1.5 pr-2',
          frame == 'light' ? 'bg-white' : 'bg-zinc-700',
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
    </div>
  )
}
