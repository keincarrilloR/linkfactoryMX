'use client'

import { useEffect, useState } from 'react'

const Clock = () => {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const ahora = new Date()

      const formatted = ahora.toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })

      setTimeString(formatted)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return <span>{timeString}</span>
}

export default Clock
