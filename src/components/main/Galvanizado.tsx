import StatusCard from '../cards/StatusCard'
import Title from '../Title'
import { useGalvanizadoData } from '../../hooks/useGalvanizadoData'

interface Props {
  maquinaId: string
}

const Galvanizado = ({ maquinaId }: Props) => {
  const galvanizadoData = useGalvanizadoData(maquinaId)

  return (
    <>
      <Title title="Galvanizado" />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {galvanizadoData.map(
          ({ title, value, grafana, min, max, color, icon }) => (
            <StatusCard
              key={title}
              title={title}
              value={value}
              grafana={grafana}
              min={min}
              max={max}
              color={color}
            >
              {icon}
            </StatusCard>
          )
        )}
      </section>
    </>
  )
}

export default Galvanizado
