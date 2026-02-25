import { useSocket } from '../../../hooks/useSocket'
import Estado from './Estado'
import PiezasTurno from './PiezasTurno'

interface Props {
  maquinaId: string
}

const CardEstado = ({ maquinaId }: Props) => {
  const { getMaquina } = useSocket()
  const data = getMaquina(maquinaId)

  const estado = data?.informativo?.estadoYRun?.estadoMol1
  const turno = data?.informativo?.estadoYRun?.turnoMol1
  const piezas = data?.informativo?.estadoYRun?.piezasMol1
  const maquina = data?.informativo?.tonelaje?.maquina

  return (
    <div
      className={`p-3 sm:p-4 rounded-lg transition-all 
              ${estado === 'Corriendo' ? ' bg-on-fondo' : ' bg-off-fondo'}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <Estado estado={estado} maquina={maquina} />
        <PiezasTurno turno={turno} piezas={piezas} />
      </div>
    </div>
  )
}

export default CardEstado
