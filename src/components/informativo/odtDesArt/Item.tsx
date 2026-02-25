import type { JSX } from 'react'

interface Props {
  title?: string
  info?: string
  children?: JSX.Element
}

const Item = ({ title = '--', info = 'Sin información', children }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs opacity-50 uppercase tracking-widest pl-1">
        {title}
      </span>
      <div className="flex items-center gap-2 bg-gray p-2 sm:p-3 rounded-lg">
        {children}
        <p className="text-sm sm:text-lg font-medium uppercase">{info}</p>
      </div>
    </div>
  )
}

export default Item
