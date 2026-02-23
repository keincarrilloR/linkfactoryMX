export const getColor = (min: number, max: number, value: number) => {
  if (value < max && value > min) return 'green'
  // Detenido
  if (String(value) === '0') return 'stop'

  if (min === 0 && max === 0) return 'purple' // Sin rango
  // Preventivo
  if (max - max * 0.35 > value) return 'orange' // Bajo
  if (min + min * 0.35 < value) return 'orange' // Alto

  // Fuera del rango
  if (value < min) return 'red'
  if (value > max) return 'red'

  // Sin conexion o datos invalidos
  if (isNaN(value) || isNaN(min) || isNaN(max)) return 'black'
}
