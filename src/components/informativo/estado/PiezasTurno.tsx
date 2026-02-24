import { Package } from 'lucide-react'
import { classesIconsSmall } from '../../../styles/icons'

interface Props {
  turno?: string
  piezas?: number
}

const PiezasTurno = ({ turno = '--', piezas = 0 }: Props) => {
  return (
    <div className="flex items-center gap-6 sm:gap-10">
      <span className="text-sm sm:text-lg opacity-70">
        {turno || 'Sin turno'}
      </span>

      <div className="flex items-center gap-2 sm:gap-4">
        <Package className={classesIconsSmall} />

        <div className="flex flex-col">
          <span className="text-xs sm:text-lg opacity-70">
            Piezas procesadas
          </span>
          <span className="font-bold text-base sm:text-xl">{piezas ?? 0}</span>
        </div>
      </div>
    </div>
  )
}

export default PiezasTurno
