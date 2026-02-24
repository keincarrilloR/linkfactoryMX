import { Newspaper } from 'lucide-react'
import { classesIconsSmall } from '../../../styles/icons'

interface Props {
  title?: string
  info?: string
}

const Item = ({ title = '--', info = 'Sin información' }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs opacity-50 uppercase tracking-widest pl-1">
        {title}
      </span>
      <div className="flex items-center gap-2 bg-gray p-2 sm:p-3 rounded-lg">
        <Newspaper className={classesIconsSmall} />
        <p className="text-sm sm:text-lg font-medium">{info}</p>
      </div>
    </div>
  )
}

export default Item
