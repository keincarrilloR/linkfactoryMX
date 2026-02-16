import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'

const Variables: React.FC = () => {
  const { molinoData } = useSocket()
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
    </section>
  )
}

export default Variables
