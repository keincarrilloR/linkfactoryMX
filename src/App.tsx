import StatusCard from './components/cards/StatusCard'
import { useSocket } from './context/SocketContext'
import DashboardLayout from './layout/Layout'

const App = () => {
  const { molinoData, isConnected } = useSocket()

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-3 gap-6">
        <StatusCard
          title="Temperatura Horno Zinc (°C)"
          value={molinoData?.temp.toString() || '--'}
          min="453"
          max="482"
          color="orange"
        />

        <StatusCard
          title="Flujo Nitrógeno"
          value={molinoData?.flujonit.toString() || '--'}
          color="blue"
        />

        <StatusCard
          title="Piezas Procesadas"
          value={molinoData?.piezas.toString() || '--'}
          color="green"
        />
      </div>

      <div className="mt-4 flex justify-between items-center text-sm opacity-70">
        <span></span>
        <span className="flex items-center gap-2">
          {isConnected ? '🟢 Conectado' : '🔴 Desconectado'}
          {molinoData && (molinoData.run ? ' | ⚙️ Operando' : ' | ⏸️ Detenido')}
        </span>
      </div>
    </DashboardLayout>
  )
}

export default App
