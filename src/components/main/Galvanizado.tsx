import StatusCard from '../cards/StatusCard'
import Title from '../Title'
import { useSocket } from '../../hooks/useSocket'
import { GALVANIZADO_KEYS } from '../../config/maquinas'
import getColor from '../../utils/getColor'
import type { colors } from '../../types/colors'

interface Props {
  maquinaId: string
}

const Galvanizado = ({ maquinaId }: Props) => {
  const { getMaquina } = useSocket()
  const variables = getMaquina(maquinaId)?.variables

  if (!variables) return null

  const items = GALVANIZADO_KEYS.map(({ key, grafana, icon, transform }) => {
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
      color: getColor(min, max, nom, value) as colors,
      grafana,
      icon
    }
  })

  return (
    <>
      <Title title="Galvanizado" />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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

export default Galvanizado
