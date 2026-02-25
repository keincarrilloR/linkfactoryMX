import {
  createContext,
  useEffect,
  useState,
  useRef,
  type ReactNode
} from 'react'
import type { MaquinaData, SocketContextType } from '../types'

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
)

type SocketProviderProps = {
  children: ReactNode
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [maquinasData, setMaquinasData] = useState<MaquinaData[]>([])
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
        const ids = ['mx001', 'mx002', 'mx003', 'mxsl1', 'mxrs1']
        const nuevas: MaquinaData[] = ids
          .filter(id => data[id])
          .map(id => ({ id, ...data[id] }))

        setMaquinasData(nuevas)
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

  const getMaquina = (id: string) =>
    maquinasData.find(maquina => maquina.id === id)

  return (
    <SocketContext.Provider value={{ maquinasData, getMaquina, isConnected }}>
      {children}
    </SocketContext.Provider>
  )
}
