import { useSocket } from '../hooks/useSocket'

const { molinoData } = useSocket()

const medias = (max: number, min: number, nom: number) => {
  const mediaInferior = (min + nom) / 2
  const mediaSuperior = (max + nom) / 2
  return { mediaInferior, mediaSuperior }
}

export const getColor = (
  min: number,
  max: number,
  nom: number,
  value: number
) => {
  const { mediaInferior, mediaSuperior } = medias(max, min, nom)
  if (isNaN(value) || isNaN(min) || isNaN(max)) return 'black'

  if (molinoData?.informativo?.estadoYRun?.estadoMol1 !== 'Corriendo')
    return 'stop'

  if (value === 0) return 'stop'

  if (min === 0 && max === 0) return 'purple'

  if (value < mediaInferior) return 'orange'
  if (value > mediaSuperior) return 'orange'

  if (value < min || value > max) return 'red'

  return 'green'
}
