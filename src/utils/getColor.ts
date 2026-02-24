export const getColor = (min: number, max: number, value: number) => {
  if (isNaN(value) || isNaN(min) || isNaN(max)) return 'black'

  if (min === 0 && max === 0) return 'purple'

  if (value === 0) return 'stop'

  const realMin = Math.min(min, max)
  const realMax = Math.max(min, max)

  const range = (realMax - realMin) * 0.08
  if (value <= realMin + range || value >= realMax - range) return 'orange'

  if (value < realMin || value > realMax) return 'red'

  return 'green'
}
