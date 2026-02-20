import {
  BarChart3,
  FileText,
  Newspaper,
  Package,
  Play,
  ScrollText,
  Square
} from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import { classesIconsSmall } from '../../styles/icons'

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
          molinoData?.general.estadoMol1 === 'Corriendo'
            ? 'border border-on bg-on-fondo'
            : 'border border-off bg-off-fondo'
        }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                {molinoData?.general.estadoMol1 === 'Corriendo' ? (
                  <Play className="w-7 h-7 text-on" />
                ) : (
                  <Square className="w-7 h-7 text-off" />
                )}

                <div className="flex flex-col">
                  <span className="text-md opacity-70">Estado</span>
                  <span
                    className={`font-semibold ${
                      molinoData?.general.estadoMol1 === 'Corriendo'
                        ? 'text-on'
                        : 'text-off'
                    }`}
                  >
                    {molinoData?.general.estadoMol1 === 'Corriendo'
                      ? 'Operando'
                      : 'Detenido'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div>
                  <span className="text-lg opacity-70">
                    {molinoData?.general.turnoMol1 || '0'}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Package className={classesIconsSmall} />

                  <div className="flex flex-col">
                    <span className="text-md opacity-70">
                      Piezas procesadas
                    </span>
                    <span className="font-bold text-lg">
                      {molinoData?.variables.piezasMol1 || '0'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-panel rounded-lg text-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-gray p-3 rounded-lg">
                  <FileText className={classesIconsSmall} />
                  <p className=" font-medium">
                    {molinoData?.informativo.odt || 'Sin descripción'}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gray p-3 rounded-lg">
                  <Newspaper className={classesIconsSmall} />

                  <p className="">
                    {molinoData?.informativo.articulo || 'Sin descripción'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray p-3 rounded-lg">
                <ScrollText className={classesIconsSmall} />

                <p className="leading-relaxed">
                  {molinoData?.informativo.descripcion || 'Sin descripción'}
                </p>
              </div>
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
