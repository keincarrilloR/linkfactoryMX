import {
  createContext,
  useEffect,
  useState,
  useRef,
  type ReactNode
} from 'react'
import type { Molino1Data, SocketContextType } from '../types'

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
)

type SocketProviderProps = {
  children: ReactNode
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [molinoData, setMolinoData] = useState<Molino1Data | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL)
    socketRef.current = socket

    socket.onopen = () => {
      console.log('Conectado')
      setIsConnected(true)
    }

    socket.onmessage = event => {
      try {
        const data = JSON.parse(event.data)
        if (data?.mx001) {
          setMolinoData(data.mx001)
        }
      } catch (error) {
        console.error(error)
      }
    }

    socket.onclose = () => {
      setIsConnected(false)
      alert('Reintentando conexión...')
      setTimeout(() => {
        window.location.reload()
      }, 5000)
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <SocketContext.Provider value={{ molinoData, isConnected }}>
      {children}
    </SocketContext.Provider>
  )
}
