import { MaquinaData } from './maquinaData'

type SocketContextType = {
  maquinasData: MaquinaData[]
  getMaquina: (id: string) => MaquinaData | undefined
  isConnected: boolean
}

export type { SocketContextType }
