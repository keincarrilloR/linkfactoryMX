import StatusCard from '../cards/StatusCard'
import Title from '../Title'
import { useSocket } from '../../hooks/useSocket'
import { MAQUINAS, VARIABLES_KEYS } from '../../config/maquinas'
import getColor from '../../utils/getColor'
import type { colors } from '../../types/colors'

interface Props {
  maquinaId: string
}

const Variables = ({ maquinaId }: Props) => {
  const { getMaquina } = useSocket()
  const maquina = getMaquina(maquinaId)
  const variables = maquina?.variables
  const estado = maquina?.informativo?.estadoYRun?.estado

  if (!variables) return null

  const maquinaIndex = MAQUINAS.findIndex(maquina => maquina.id === maquinaId)
  const keysActuales = VARIABLES_KEYS[maquinaIndex] ?? []
  const items = keysActuales.map(molino => {
    const { key, grafana, icon, transform } = molino
    const variable = variables[key]
    if (!variable) return null

    const min = Number(variable.maxMinNom?.dbp_valmin ?? 0)
    const max = Number(variable.maxMinNom?.dbp_valmax ?? 0)
    const nom = Number(variable.maxMinNom?.dbp_valnom ?? 0)
    const raw = variable.actual ?? 0
    const value = transform ? transform(raw) : raw

    return {
      key,
      title: variable.nombre ?? key,
      value,
      min,
      max,
      color: getColor(min, max, nom, variable.actual ?? 0, estado) as colors,
      grafana,
      icon
    }
  })

  return (
    <>
      <Title title="Variables" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map(item => (
          <StatusCard
            key={item!.key}
            title={item!.title}
            value={item!.value}
            min={item!.min}
            max={item!.max}
            color={item!.color}
            grafana={item!.grafana}
          >
            {item!.icon}
          </StatusCard>
        ))}
      </section>
    </>
  )
}

export default Variables
