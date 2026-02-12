'use client'

import { useEffect, useState } from 'react'

type ClockProps = {
  fechaHoraMX?: string
  fechaHoraMV?: string
}

export default function Clock({ fechaHoraMX, fechaHoraMV }: ClockProps) {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    let interval

    const updateClock = () => {
      const ahora = new Date()

      const tiempoDeSobra = -6 * 60
      const utc = ahora.getTime() + ahora.getTimezoneOffset() * 60000
      const tiempo = new Date(utc + 60000 * tiempoDeSobra)

      const ano = tiempo.getFullYear()
      const mes = String(tiempo.getMonth() + 1).padStart(2, '0')
      const dia = String(tiempo.getDate()).padStart(2, '0')
      const horas = String(tiempo.getHours()).padStart(2, '0')
      const minutos = String(tiempo.getMinutes()).padStart(2, '0')
      const segundos = String(tiempo.getSeconds()).padStart(2, '0')

      const formatted = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`

      setTimeString(formatted)

      try {
        if (fechaHoraMX && fechaHoraMV) {
          const difmx = Math.abs(
            Number(fechaHoraMX.slice(-2)) - Number(segundos)
          )
          const difmv = Math.abs(
            Number(fechaHoraMV.slice(-2)) - Number(segundos)
          )

          if (difmx === 10 || difmv === 10) {
            window.location.reload()
          }
        }
      } catch {
        setTimeout(() => window.location.reload(), 1000)
      }
    }

    updateClock()
    interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [fechaHoraMX, fechaHoraMV])

  return <span>{timeString}</span>
}
