import { useSocket } from './hooks/useSocket'
import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Variables from './components/main/Variables'
import { CircleCheck, CircleX } from 'lucide-react'

const App = () => {
  const { isConnected } = useSocket()

  return (
    <DashboardLayout>
      <div className="grid gap-4">
        <Informativo />
        <Variables />
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2">
          <span className="flex items-center gap-2 text-md">
            {isConnected ? 'Conectado' : 'Desconectado'}
            {isConnected ? (
              <CircleCheck className="w-5 h-5 text-on" />
            ) : (
              <CircleX className="w-5 h-5 text-off" />
            )}
          </span>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
