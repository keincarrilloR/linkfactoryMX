import { Play, Square, Package, FileText, BarChart3 } from 'lucide-react'
import StatusCard from './components/cards/StatusCard'
import { useSocket } from './hooks/useSocket'
import DashboardLayout from './layout/Layout'

const App = () => {
  const { molinoData, isConnected } = useSocket()

  return (
    <DashboardLayout>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Informativo</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-60">
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg transition-all
        ${
          molinoData?.run
            ? 'border border-on bg-on-fondo'
            : 'border border-off bg-off-fondo'
        }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  {molinoData?.run ? (
                    <Play className="w-7 h-7 text-on" />
                  ) : (
                    <Square className="w-7 h-7 text-off" />
                  )}

                  <div className="flex flex-col">
                    <span className="text-md opacity-70">Estado</span>
                    <span
                      className={`font-semibold ${molinoData?.run ? 'text-on' : 'text-off'}`}
                    >
                      {molinoData?.run ? 'Operando' : 'Detenido'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Package className="w-7 h-7 text-production" />

                  <div className="flex flex-col">
                    <span className="text-md opacity-70">
                      Piezas procesadas
                    </span>
                    <span className="font-bold text-lg">
                      {molinoData?.piezas}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-panel rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-7 h-7 opacity-70" />
                <h2 className="text-md font-medium">Descripción</h2>
              </div>
            </div>
          </div>

          <div className="p-4 bg-panel rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-7 h-7 opacity-70" />
              <h2 className="text-md font-medium">Producción</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
          title="Velocidad (ppm)"
          value={molinoData?.velocidad.toString() || '--'}
          min="80"
          max="100"
          color="green"
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

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-sm opacity-70 gap-2">
        <span className="flex items-center gap-2">
          {isConnected ? '🟢 Conectado' : '🔴 Desconectado'}
          {molinoData && (molinoData.run ? ' | ⚙️ Operando' : ' | ⏸️ Detenido')}
        </span>
      </div>
    </DashboardLayout>
  )
}

export default App
