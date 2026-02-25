const medias = (max: number, min: number, nom: number) => {
  return {
    mediaInferior: (min + nom) / 2,
    mediaSuperior: (max + nom) / 2
  }
}

const getColor = (
  min: number,
  max: number,
  nom: number,
  value: number,
  estado?: string
) => {
  if (isNaN(value) || isNaN(min) || isNaN(max)) return 'black'
  if (estado === 'Detenido' || value === 0) return 'stop'
  if (min === 0 && max === 0) return 'purple'

  if (value < min || value > max) return 'red'

  const { mediaInferior, mediaSuperior } = medias(max, min, nom)
  if (value < mediaInferior || value > mediaSuperior) return 'orange'

  return 'green'
}

export default getColor
