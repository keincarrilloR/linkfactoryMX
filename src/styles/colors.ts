const colors = {
  green: 'bg-green-600 border-green-500',
  orange: 'bg-orange-500 border-orange-400',
  red: 'bg-red-600 border-red-500',
  purple: 'bg-purple-600 border-purple-500',
  stop: 'bg-gray-600 border-gray-500',
  black: 'bg-black border-gray-800'
}

const colorItems = [
  { label: 'Activo', classes: colors.green },
  { label: 'Preventivo MAX. MIN.', classes: colors.orange },
  { label: 'Fuera de rango MAX. MIN.', classes: colors.red },
  { label: 'Sin MAX. MIN.', classes: colors.purple },
  { label: 'Detenido', classes: colors.stop },
  { label: 'Sin conexión', classes: colors.black }
]

export { colors, colorItems }
