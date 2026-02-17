import { BarChart3, FileText, Package, Play, Square } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'

const Informativo: React.FC = () => {
  const { molinoData } = useSocket()

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Informativo</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  <span className="text-md opacity-70">Piezas procesadas</span>
                  <span className="font-bold text-lg">
                    {molinoData?.piezas || '--'}
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
  )
}

export default Informativo
