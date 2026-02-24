import { BarChart3 } from 'lucide-react'
import { classesIconsSmall } from '../../styles/icons'

import Title from '../Title'
import CardEstado from '../informativo/estado/CardEstado'
import OdtArtDes from '../informativo/odtDesArt/OdtDesArt'
import Tonelaje from '../informativo/produccion/Tonejale'

const Informativo: React.FC = () => {
  return (
    <>
      <Title title="Informativo" />
      <section className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <CardEstado />
            <OdtArtDes />
          </div>

          <div className="p-3 sm:p-4 bg-panel rounded-lg flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BarChart3 className={classesIconsSmall} />
              <h2 className="text-sm sm:text-md font-medium">Producción</h2>
            </div>

            <div className="flex flex-col gap-3">
              <Tonelaje />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Informativo
