import { useSocket } from '../../../hooks/useSocket'
import Item from './Item'

const OdtArtDes = () => {
  const { molinoData } = useSocket()

  const articulo = molinoData?.informativo?.odtArtDesc?.articulo
  const odt = molinoData?.informativo?.odtArtDesc?.odt
  const descripcion = molinoData?.informativo?.odtArtDesc?.descripcion

  return (
    <div className="p-3 sm:p-4 bg-panel rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-3">
          <Item title="Artículo" info={articulo} />

          <Item title="ODT" info={odt} />
        </div>

        <Item title="Descripción" info={descripcion} />
      </div>
    </div>
  )
}

export default OdtArtDes
