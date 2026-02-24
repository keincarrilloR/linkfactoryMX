import { Play, Square } from 'lucide-react'

interface Props {
  estado?: string
  maquina?: string
}

const Estado = ({ estado = 'Detenido', maquina = '' }: Props) => {
  return (
    <div className="flex items-center gap-3">
      {estado === 'Corriendo' ? (
        <Play className="w-6 h-6 sm:w-7 sm:h-7 text-on" />
      ) : (
        <Square className="w-6 h-6 sm:w-7 sm:h-7 text-off" />
      )}

      <div className="flex flex-col">
        <span className="text-xs sm:text-lg opacity-70">
          Estado{' '}
          {maquina && (
            <span className="text-xs sm:text-lg font-medium">{maquina}</span>
          )}
        </span>
        <span
          className={`text-sm sm:text-lg font-semibold ${
            estado === 'Corriendo' ? 'text-on' : 'text-off'
          }`}
        >
          {estado === 'Corriendo' ? 'Operando' : 'Detenido'}
        </span>
      </div>
    </div>
  )
}

export default Estado
