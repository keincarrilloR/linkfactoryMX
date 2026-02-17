import colors from '../../styles/colors'

type CardProps = {
  title: string
  value: string
  min?: string
  max?: string
  color?: 'green' | 'orange' | 'blue'
  grafana?: string
}

const StatusCard = ({
  title,
  value,
  min,
  max,
  color = 'green',
  grafana
}: CardProps) => {
  return (
    <a
      href={grafana}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
    >
      <div
        className={`${colors[color]} rounded-lg p-5 text-white shadow-lg bg-gre hover:shadow-xl transition-shadow`}
      >
        <h3 className="text-xs uppercase tracking-wide opacity-80 mb-2">
          {title}
        </h3>

        <p className="text-4xl font-bold mb-3">{value}</p>

        {(min || max) && (
          <div className="flex justify-between text-md pt-3 border-t border-white/20">
            {min && <span className="opacity-75 ">Min: {min}</span>}
            {max && <span className="opacity-75 ">Max: {max}</span>}
          </div>
        )}
      </div>
    </a>
  )
}

export default StatusCard
