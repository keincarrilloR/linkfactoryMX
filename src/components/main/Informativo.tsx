import {
  BarChart3,
  FileText,
  Newspaper,
  Package,
  Play,
  ScrollText,
  Square,
  Weight,
  Palette
} from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import { classesIconsSmall } from '../../styles/icons'
import colors from '../../styles/colors'

const colorItems = [
  { label: 'Activo', classes: colors.green },
  { label: 'Preventivo MAX. MIN.', classes: colors.orange },
  { label: 'Fuera de rango MAX. MIN.', classes: colors.red },
  { label: 'Sin MAX. MIN.', classes: colors.purple },
  { label: 'Detenido', classes: colors.stop },
  { label: 'Sin conexión', classes: colors.black }
]

const Informativo: React.FC = () => {
  const { molinoData } = useSocket()

  const estado = molinoData?.informativo?.estadoYRun?.estadoMol1
  const turno = molinoData?.informativo?.estadoYRun?.turnoMol1
  const piezas = molinoData?.informativo?.estadoYRun?.piezasMol1
  const tont = molinoData?.informativo?.tonelaje?.tont
  const maquina = molinoData?.informativo?.tonelaje?.maquina

  return (
    <section className="space-y-4">
      <h2 className="text-base sm:text-lg font-semibold">Informativo</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div
            className={`p-3 sm:p-4 rounded-lg transition-all 
              ${
                estado === 'Corriendo'
                  ? 'border border-on bg-on-fondo'
                  : 'border border-off bg-off-fondo'
              }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                {estado === 'Corriendo' ? (
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-on" />
                ) : (
                  <Square className="w-6 h-6 sm:w-7 sm:h-7 text-off" />
                )}

                <div className="flex flex-col">
                  <span className="text-xs sm:text-lg opacity-70">Estado</span>
                  <span
                    className={`text-sm sm:text-lg font-semibold ${
                      estado === 'Corriendo' ? 'text-on' : 'text-off'
                    }`}
                  >
                    {estado === 'Corriendo' ? 'Operando' : 'Detenido'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:gap-10">
                <span className="text-sm sm:text-lg opacity-70">
                  {turno || 'Sin turno'}
                </span>

                <div className="flex items-center gap-2 sm:gap-4">
                  <Package className={classesIconsSmall} />

                  <div className="flex flex-col">
                    <span className="text-xs sm:text-lg opacity-70">
                      Piezas procesadas
                    </span>
                    <span className="font-bold text-base sm:text-xl">
                      {piezas ?? 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-panel rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-xs opacity-50 uppercase tracking-widest pl-1">
                    ODT
                  </span>
                  <div className="flex items-center gap-2 bg-gray p-2 sm:p-3 rounded-lg">
                    <FileText className={classesIconsSmall} />
                    <p className="text-sm sm:text-lg font-medium">
                      {molinoData?.informativo?.odtArtDesc?.odt || 'Sin ODT'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs opacity-50 uppercase tracking-widest pl-1">
                    Artículo
                  </span>
                  <div className="flex items-center gap-2 bg-gray p-2 sm:p-3 rounded-lg">
                    <Newspaper className={classesIconsSmall} />
                    <p className="text-sm sm:text-lg font-medium">
                      {molinoData?.informativo?.odtArtDesc?.articulo ||
                        'Sin artículo'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs opacity-50 uppercase tracking-widest pl-1">
                  Descripción
                </span>
                <div className="flex items-start gap-2 bg-gray p-2 sm:p-3 rounded-lg h-full">
                  <ScrollText
                    className={`${classesIconsSmall} shrink-0 mt-0.5`}
                  />
                  <p className="text-sm sm:text-lg font-medium">
                    {molinoData?.informativo?.odtArtDesc?.descripcion ||
                      'Sin descripción'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1 p-3 sm:p-4 bg-panel rounded-lg flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BarChart3 className={classesIconsSmall} />
              <h2 className="text-sm sm:text-md font-medium">Producción</h2>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between bg-gray rounded-lg px-3 sm:px-4 py-3 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Weight className={classesIconsSmall} />
                  <span className="text-sm sm:text-lg opacity-70">
                    Tonelaje
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-bold">
                    {tont ?? '0'}
                  </span>
                  <span className="text-xs sm:text-sm opacity-50 ml-1">
                    ton
                  </span>
                </div>
              </div>

              {maquina && (
                <div className="flex items-center justify-between bg-gray rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                  <span className="text-xs opacity-50 uppercase tracking-wide">
                    Máquina
                  </span>
                  <span className="text-xs sm:text-lg font-medium">
                    {maquina}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="sm:col-span-2 p-3 sm:p-4 bg-panel rounded-lg flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Palette className={classesIconsSmall} />
              <h2 className="text-sm sm:text-md font-medium">
                Código de colores
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {colorItems.map(({ label, classes }) => (
                <div
                  key={label}
                  className={`border rounded-lg px-3 py-2 ${classes}`}
                >
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Informativo
