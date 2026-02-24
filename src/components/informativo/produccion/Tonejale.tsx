import { BarChart3, Weight } from 'lucide-react'
import { classesIconsSmall } from '../../../styles/icons'
import { useSocket } from '../../../hooks/useSocket'

const Tonelaje = () => {
  const { molinoData } = useSocket()

  const ton = molinoData?.informativo?.tonelaje?.tont ?? 0

  return (
    <>
      <div className="p-3 sm:p-4 bg-panel rounded-lg flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <BarChart3 className={classesIconsSmall} />
          <h2 className="text-sm sm:text-md font-medium">Producción</h2>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between bg-gray rounded-lg px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Weight className={classesIconsSmall} />
              <span className="text-sm sm:text-lg opacity-70">Tonelaje</span>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold">{ton}</span>
              <span className="text-xs sm:text-sm opacity-50 ml-1">ton</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tonelaje
