import { colorItems } from '../styles/colors'

const CodigoColores = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-md">
      <span className="opacity-40 uppercase tracking-widest shrink-0">
        Código de colores
      </span>
      <div className="flex flex-wrap gap-2">
        {colorItems.map(({ label, classes }) => (
          <div
            key={label}
            className={`border rounded-md px-2.5 py-1 ${classes}`}
          >
            <span className="font-medium text-white">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodigoColores
