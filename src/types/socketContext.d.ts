import { MaquinaData } from './maquinaData'

type SocketContextType = {
  maquinaData: MaquinaData | null
  isConnected: boolean
}

export type { SocketContextType }
