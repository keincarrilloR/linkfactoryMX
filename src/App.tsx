import { useSocket } from './hooks/useSocket'
import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Variables from './components/main/Variables'

const App = () => {
  const { molinoData, isConnected } = useSocket()

  return (
    <DashboardLayout>
      <div className="grid gap-4">
        <Informativo />
        <Variables />
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2">
          <span className="flex items-center gap-2">
            {isConnected ? 'Conectado' : 'Desconectado'}
            {molinoData && (molinoData.run ? ` |  Operando` : ` |  Detenido`)}
          </span>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App
