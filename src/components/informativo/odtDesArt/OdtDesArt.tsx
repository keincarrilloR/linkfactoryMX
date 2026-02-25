import { Newspaper, NotepadText, Scroll } from 'lucide-react'
import { useSocket } from '../../../hooks/useSocket'
import Item from './Item'
import { classesIconsSmall } from '../../../styles/icons'

interface Props {
  maquinaId: string
}

const OdtArtDes = ({ maquinaId }: Props) => {
  const { getMaquina } = useSocket()
  const data = getMaquina(maquinaId)

  const articulo = data?.informativo?.odtArtDesc?.articulo
  const odt = data?.informativo?.odtArtDesc?.odt
  const descripcion = data?.informativo?.odtArtDesc?.descripcion

  return (
    <div className="p-3 sm:p-4 bg-panel rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-3">
          <Item title="Artículo" info={articulo}>
            <Newspaper className={classesIconsSmall} />
          </Item>

          <Item title="ODT" info={odt}>
            <NotepadText className={classesIconsSmall} />
          </Item>
        </div>

        <Item title="Descripción" info={descripcion}>
          <Scroll className={classesIconsSmall} />
        </Item>
      </div>
    </div>
  )
}

export default OdtArtDes
