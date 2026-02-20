import colors from '../../styles/colors'

type CardProps = {
  title: string
  value: string
  min?: string
  max?: string
  color?: 'green' | 'orange' | 'blue'
  grafana?: string
  children?: React.ReactNode
}

const StatusCard = ({
  title,
  value,
  min,
  max,
  color = 'green',
  grafana,
  children
}: CardProps) => {
  return (
    <a
      href={grafana}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform h-full block"
    >
      <div
        className={`${colors[color]} h-full flex flex-col justify-between rounded-lg flex-1 p-5 text-white shadow-lg hover:shadow-xl transition-shadow`}
      >
        <h3 className="text-lg uppercase tracking-wide opacity-90 mb-2 font-semibold">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-1">
          {children}
          <p className="text-4xl font-bold mb-3">{value}</p>
        </div>

        {(min || max) && (
          <div className="flex justify-between text-lg pt-3 border-t border-white/30">
            {min && <span className="opacity-80">Min: {min}</span>}
            {max && <span className="opacity-80">Max: {max}</span>}
          </div>
        )}
      </div>
    </a>
  )
}

export default StatusCard
