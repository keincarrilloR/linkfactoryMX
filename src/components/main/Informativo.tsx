import {
  BarChart3,
  FileText,
  Newspaper,
  Package,
  Play,
  ScrollText,
  Square,
  Weight
} from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import { classesIconsSmall } from '../../styles/icons'

const Informativo: React.FC = () => {
  const { molinoData } = useSocket()

  const estado = molinoData?.informativo?.estadoYRun?.estadoMol1
  const turno = molinoData?.informativo?.estadoYRun?.turnoMol1
  const piezas = molinoData?.informativo?.estadoYRun?.piezasMol1
  const tont = molinoData?.informativo?.tonelaje?.tont
  const maquina = molinoData?.informativo?.tonelaje?.maquina

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Informativo</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg transition-all 
              ${
                estado === 'Corriendo'
                  ? 'border border-on bg-on-fondo'
                  : 'border border-off bg-off-fondo'
              }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                {estado === 'Corriendo' ? (
                  <Play className="w-7 h-7 text-on" />
                ) : (
                  <Square className="w-7 h-7 text-off" />
                )}

                <div className="flex flex-col">
                  <span className="text-md opacity-70">Estado</span>
                  <span
                    className={`font-semibold ${
                      estado === 'Corriendo' ? 'text-on' : 'text-off'
                    }`}
                  >
                    {estado === 'Corriendo' ? 'Operando' : 'Detenido'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <span className="text-lg opacity-70">
                  {turno || 'Sin turno'}
                </span>

                <div className="flex items-center gap-4">
                  <Package className={classesIconsSmall} />

                  <div className="flex flex-col">
                    <span className="text-md opacity-70">
                      Piezas procesadas
                    </span>
                    <span className="font-bold text-lg">{piezas ?? 0}</span>
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
                  <p className="font-medium">
                    {molinoData?.informativo?.odtArtDesc?.odt || 'Sin ODT'}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-gray p-3 rounded-lg">
                  <Newspaper className={classesIconsSmall} />
                  <p>
                    {molinoData?.informativo?.odtArtDesc?.articulo ||
                      'Sin artículo'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray p-3 rounded-lg">
                <ScrollText className={classesIconsSmall} />
                <p className="leading-relaxed">
                  {molinoData?.informativo?.odtArtDesc?.descripcion ||
                    'Sin descripción'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-panel rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 opacity-60" />
            <h2 className="text-md font-medium">Producción</h2>
          </div>

          <div className="grid">
            <div className="flex flex-col gap-3">
              {maquina && (
                <div className="flex items-center justify-between bg-gray rounded-lg px-4 py-3">
                  <span className="text-sm opacity-50 uppercase tracking-wide">
                    Máquina
                  </span>
                  <span className="text-sm font-medium">{maquina}</span>
                </div>
              )}

              <div className="flex items-center justify-between bg-gray rounded-lg px-4 py-4">
                <div className="flex items-center gap-3">
                  <Weight className="w-6 h-6 opacity-50" />
                  <span className="text-md opacity-70">Tonelaje</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold">{tont ?? '0'}</span>
                  <span className="text-sm opacity-50 ml-1">ton</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Informativo
