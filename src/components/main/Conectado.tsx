import { CircleCheck, CircleX } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'

const Conectado = () => {
  const { isConnected } = useSocket()
  return (
    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2">
      <span className="flex items-center gap-2 text-lg">
        {isConnected ? 'Conectado' : 'Desconectado'}
        {isConnected ? (
          <CircleCheck className="w-6 h-6 text-success" />
        ) : (
          <CircleX className="w-6 h-6 text-error" />
        )}
      </span>
    </div>
  )
}

export default Conectado
