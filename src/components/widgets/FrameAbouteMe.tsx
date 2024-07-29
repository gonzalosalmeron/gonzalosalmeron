import WindowFrame from '@/components/ui/WindowFrame'

import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { useEffect, useRef, useState, type HTMLProps } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
  gsap.registerPlugin(ScrollTrigger)
}

export default function FrameAbsoluteMe() {
  const [clientIp, setClientIp] = useState('xxxx.xx.xxx.xxx')
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((res) => setClientIp(res?.ip ?? 'xxxx.xx.xxx.xxx'))
      .catch((err) => console.error(err))
  }, [])

  useGSAP(() => {
    if (inputRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#aboutme',
          start: 'top center',
          onEnter: () => tl.play(),
          onLeave: () => tl.pause(),
          onEnterBack: () => tl.play(),
          onLeaveBack: () => tl.pause()
        },
        onComplete: () => {
          ScrollTrigger.getAll().forEach((st) => st.kill())
        }
      })

      const addCommandAnimation = (
        value: string,
        elementId: string,
        callback?: () => void
      ) => {
        tl.to(inputRef.current, {
          duration: 2,
          delay: 1,
          text: { value },
          ease: 'none'
        })
        tl.to(inputRef.current, {
          delay: 0.8,
          duration: 0,
          text: '',
          onComplete: () => {
            if (elementId) {
              document.getElementById(elementId)?.classList.remove('hidden')
            }
            if (callback) callback()
            const scrollArea = document.getElementById('scrollarea')
            if (scrollArea) scrollArea.scrollTo(0, scrollArea.scrollHeight)
          }
        })
      }

      addCommandAnimation('curl -4 ifconfig.me', 'command-curl')
      addCommandAnimation('cat aboutme.txt', 'command-cat')
      addCommandAnimation('open me.avif', 'command-open', () => {
        document.querySelector('.frame-mewebp')?.classList.remove('hidden')
      })
    }
  }, [])

  return (
    <WindowFrame
      className='max-w-7xl w-full h-[600px] mx-auto relative'
      frame='dark'
    >
      <img
        src='/astronaut.svg'
        alt='Maybe its an impostor?'
        className='absolute -top-14 right-14 w-20 hover:animate-spin cursor-progress'
      />
      <WindowFrame
        className='w-[320px] h-[400px] right-10 -bottom-10 hidden frame-mewebp'
        frame='dark'
        draggable
      >
        <img
          src='/me.avif'
          alt='who is this?'
          className='object-cover w-full h-full overflow-hidden'
          decoding='async'
          loading='lazy'
        />
      </WindowFrame>

      <div className='flex w-full flex-1 h-full flex-col justify-between overflow-y-auto'>
        <div id='scrollarea' className='flex flex-col overflow-y-auto'>
          <CommandBlock
            id='command-curl'
            command='curl -4 ifconfig.me'
            result={clientIp}
            border={false}
            className='hidden'
          />
          <CommandBlock
            id='command-cat'
            command='cat aboutme.txt'
            className='hidden'
          >
            <div className='max-w-[80ch]'>
              <p>Welcome to my coding cave!</p>
              <br />
              <p>
                I'm Gonzalo Salmerón, a software developer originally from
                Almería, now based in Málaga, Spain. Here, you can explore the
                projects I've worked on both in my free time and as part of my
                professional career.
              </p>
              <br />
              <p>
                I began my career three years ago, specializing in website
                development and custom software solutions. My goal is to create
                unique experiences that are not only visually appealing but also
                make a significant impact on users' lives by meeting their needs
                and exceeding their expectations.
              </p>
              <br />
              <p>Enjoy! :{')'}</p>
            </div>
          </CommandBlock>
          <CommandBlock
            id='command-open'
            className='hidden'
            command='open me.avif'
          />
        </div>

        <CommandBlock id='command-input' type='input'>
          <textarea
            id='console-input'
            readOnly
            className='text-white outline-none bg-transparent resize-none'
            placeholder='Type command here'
            ref={inputRef}
            rows={1}
          />
        </CommandBlock>
      </div>
    </WindowFrame>
  )
}

const CommandBlock = ({
  id,
  border = true,
  command,
  result,
  children,
  className,
  type = 'result'
}: {
  id: string
  border?: boolean
  command?: string
  result?: string
  children?: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
  type?: 'result' | 'input'
}) => {
  return (
    <div
      id={id}
      className={clsx(
        'px-7 w-full text-[0.94rem]',
        border && 'border-t-2 border-gray-700',
        className && className,
        type === 'result' ? 'py-4' : 'py-3'
      )}
    >
      <p className='text-[0.82rem] text-white flex items-center gap-2'>
        {type === 'input' && (
          <span className='hidden md:inline-flex'>
            gonzalosalmeron@portfolio
          </span>
        )}
        ~ % {type === 'input' ? children : command}
      </p>
      {(result || children) && type !== 'input' && (
        <div className='pt-2'>{result || children}</div>
      )}
    </div>
  )
}
