import WindowFrame from '@/components/ui/WindowFrame'
import { useEffect, useState } from 'react'

const getSpainTime = () => {
  const now = new Date()
  const minutesAndSeconds = now
    .toLocaleTimeString('es-ES')
    .split(':')
    .slice(1, 3)
    .join(':')
  return `${now.getUTCHours() + 2}:${minutesAndSeconds}`
}

export default function FrameIntro() {
  const [weather, setWeather] = useState<{ [key: string]: any } | null>(null)
  const [time, setTime] = useState(getSpainTime())

  useEffect(() => {
    fetchMeteo()
    setWeatherInterval()

    const checkWeatherUpdate = () => {
      const weatherInterval = localStorage.getItem('weatherInterval')
      const now = Date.now()

      // refresh weather every 5 minutes
      if (weatherInterval && now - Number(weatherInterval) > 300000) {
        fetchMeteo()
        setWeatherInterval()
      }
    }

    const interval = setInterval(() => {
      checkWeatherUpdate()
      setTime(getSpainTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const setWeatherInterval = () =>
    localStorage.setItem('weatherInterval', String(Date.now()))

  const fetchMeteo = () => {
    const urlParams = new URLSearchParams({
      latitude: 36.7202,
      longitude: -4.4203,
      current: ['temperature_2m', 'is_day', 'precipitation'],
      timezone: 'Europe/Berlin',
      forecast_days: 1,
      format: 'json'
    } as any)

    fetch(`https://api.open-meteo.com/v1/forecast?${urlParams.toString()}`)
      .then((response) => response.json())
      .then((result) => setWeather(result))
      .catch((error) => console.error('Error fetching weather data:', error))
  }

  return (
    <WindowFrame className='h-52 bottom-4 left-8' draggable>
      <div className='flex justify-between flex-col p-4 h-full'>
        <div className='flex items-center gap-2 justify-start'>
          <div className='w-3 aspect-square bg-white mb-0.5' />
          <p className='text-sm'>
            {weather?.current?.temperature_2m ?? '--'}º Celsius
          </p>
        </div>

        <p className='text-xl text-center'>Málaga, Spain</p>

        <p className='text-end text-sm' suppressHydrationWarning>
          GTM+2 {time}
        </p>
      </div>
    </WindowFrame>
  )
}
