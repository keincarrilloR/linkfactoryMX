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
  // Recupera los datos de las maquinas
  const [maquinasData, setMaquinasData] = useState<MaquinaData[]>([])
  const [isConnected, setIsConnected] = useState(false)

  /*  
    Creamos una referencia para WS, funciona como un puntero en C
    apunta a su referencia y no a su valor, lo que nos permite mantener la misma referencia
  */
  const socketRef = useRef<WebSocket | null>(null)

  // La primera vez que se monta el componente, se conecta al WS
  useEffect(() => {
    //const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL)
    const socket = new WebSocket('ws://localhost:8080')
    // Apuntamos la referencia al socket
    socketRef.current = socket

    // Socket conectado
    socket.onopen = () => {
      console.log('Conectado')
      setIsConnected(true)
    }

    // Socket recibe mensaje
    socket.onmessage = event => {
      try {
        const data = JSON.parse(event.data) // Convertimos el mensaje a JSON
        const ids = ['mx001', 'mx002', 'mx003', 'mxsl1', 'mxrs1'] // IDs de las máquinas que esperamos recibir

        const nuevas: MaquinaData[] = ids
          .filter(id => data[id]) // Buscamos el id(maquina) que tiene data
          .map(id => ({ id, ...data[id] })) // Creamos un nuevo objeto con el id y su data

        // Actualiza el estado con los nuevos datos
        setMaquinasData(nuevas)
      } catch (error) {
        console.error(error)
      }
    }

    socket.onclose = () => {
      setIsConnected(false) // Actualiza el estado de conexión
      alert('Reintentando conexión...') // Notifica al usuario que se perdió la conexión
      setTimeout(() => {
        window.location.reload()
      }, 5000) // Reintenta la conexión recargando la página después de 5 segundos
    }

    return () => {
      socket.close()
    }
  }, [])

  // Función para obtener los datos de una máquina por su ID
  const getMaquina = (id: string) =>
    maquinasData.find(maquina => maquina.id === id)

  return (
    <SocketContext.Provider value={{ maquinasData, getMaquina, isConnected }}>
      {children}
    </SocketContext.Provider>
  )
}
