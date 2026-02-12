import StatusCard from './components/cards/StatusCard'
import { useSocket } from './context/SocketContext'
import DashboardLayout from './layout/Layout'

const App = () => {
  const { molinoData, isConnected } = useSocket()

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-5 gap-6">
        <StatusCard
          title="Temperatura Horno Zinc (°C)"
          value={molinoData?.temp.toString() || '--'}
          min="453"
          max="482"
          color="orange"
        />

        <StatusCard
          title="Temperatura Combustión (°C)"
          value={molinoData?.temp_combustion.toString() || '--'}
          min="450"
          max="520"
          color="orange"
        />

        <StatusCard
          title="Presión Nitrógeno (PSI)"
          value={molinoData?.pres_nitrogeno.toString() || '--'}
          min="100"
          max="120"
          color="blue"
        />

        <StatusCard
          title="Flujo Nitrógeno (L/min)"
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
        <span className="flex items-center gap-2">
          {isConnected ? '🟢 Conectado' : '🔴 Desconectado'}
          {molinoData && (molinoData.run ? ' | ⚙️ Operando' : ' | ⏸️ Detenido')}
        </span>
      </div>
    </DashboardLayout>
  )
}

export default App
