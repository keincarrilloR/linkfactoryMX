type CardProps = {
  title: string
  value: string
  min?: string
  max?: string
  color?: 'green' | 'orange' | 'blue'
}

export default function StatusCard({
  title,
  value,
  min,
  max,
  color = 'green'
}: CardProps) {
  const colors = {
    green: 'bg-green-600',
    orange: 'bg-orange-500',
    blue: 'bg-blue-600'
  }

  return (
    <div className={`${colors[color]} rounded-xl p-4 text-white shadow`}>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>

      {(min || max) && (
        <div className="flex justify-between text-xs mt-2 opacity-80">
          <span>{min && `Min: ${min}`}</span>
          <span>{max && `Max: ${max}`}</span>
        </div>
      )}
    </div>
  )
}
