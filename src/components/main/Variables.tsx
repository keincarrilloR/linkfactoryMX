import StatusCard from '../cards/StatusCard'
import Title from '../Title'
import { useVariablesData } from '../../hooks/useVariablesData'

const Variables: React.FC = () => {
  const variablesData = useVariablesData()

  return (
    <>
      <Title title="Variables" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {variablesData.map(
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

export default Variables
