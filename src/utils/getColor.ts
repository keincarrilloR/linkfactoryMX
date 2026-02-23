export const getColor = (min: number, max: number, value: number) => {
  if (isNaN(value) || isNaN(min) || isNaN(max)) return 'black'

  if (value === 0) return 'stop'

  if (min === 0 && max === 0) return 'purple'

  const range = (max - min) * 0.1
  if (value <= min + range || value >= max - range) return 'orange'

  if (value < min || value > max) return 'red'

  return 'green'
}
