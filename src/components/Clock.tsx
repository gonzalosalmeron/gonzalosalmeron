import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    if (!time) setTime(new Date())
    const timerId = setInterval(() => setTime(new Date()), 800)
    return () => clearInterval(timerId)
  }, [])

  return (
    <p className='capitalize'>
      {time?.toLocaleDateString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })}
    </p>
  )
}
