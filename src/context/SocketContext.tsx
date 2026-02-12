import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

type Molino1Data = {
  pres_nitrogeno: number
  run: boolean
  velocidad: number
  piezas: number
  tiempo: string
  temp: number
  estado: string
  flujonit: number
  temp_combustion: number
}

type SocketContextType = {
  molinoData: Molino1Data | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

export const useSocket = () => {
  const context = useContext(SocketContext)
  if (!context) {
    throw new Error('useSocket debe usarse dentro de SocketProvider')
  }
  return context
}

type SocketProviderProps = {
  children: ReactNode
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [molinoData, setMolinoData] = useState<Molino1Data | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL)

    socket.onopen = () => {
      console.log('Conexión establecida con Molino 1 - MX')
      setIsConnected(true)
    }

    socket.onmessage = event => {
      try {
        const data = JSON.parse(event.data)
        if (data.mx001) {
          setMolinoData(data.mx001)
        }
      } catch (error) {
        console.error('Error al parsear datos:', error)
      }
    }

    socket.onerror = error => {
      console.error('❌ Error en WebSocket:', error)
      setIsConnected(false)
    }

    socket.onclose = () => {
      console.log('🔌 Conexión cerrada')
      setIsConnected(false)
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
