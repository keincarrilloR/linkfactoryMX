import { useSocket } from './hooks/useSocket'
import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Galvanizado from './components/main/Galvanizado'
import { CircleCheck, CircleX } from 'lucide-react'
import Variables from './components/main/Variables'

const App = () => {
  const { isConnected } = useSocket()

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Informativo />
        <Galvanizado />
        <Variables />
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
      </div>
    </DashboardLayout>
  )
}

export default App
