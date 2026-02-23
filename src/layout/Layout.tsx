import Clock from '../components/Clock'
import colors from '../styles/colors'

const colorItems = [
  { label: 'Activo', classes: colors.green },
  { label: 'Preventivo MAX. MIN.', classes: colors.orange },
  { label: 'Fuera de rango MAX. MIN.', classes: colors.red },
  { label: 'Sin MAX. MIN.', classes: colors.purple },
  { label: 'Detenido', classes: colors.stop },
  { label: 'Sin conexión', classes: colors.black }
]

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary flex flex-col">
      <header className="flex items-start justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border gap-3">
        <h1 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
          Molino 1 <span className="opacity-40 mx-1">—</span> MX
        </h1>
        <span className="text-xs sm:text-sm font-mono font-semibold text-white/70 tabular-nums text-right shrink-0">
          <Clock />
        </span>
      </header>

      <main className="flex-1 px-3 sm:px-6 py-4 sm:py-6 space-y-6">
        {children}
      </main>

      <footer className="border-t border-border px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs opacity-40 uppercase tracking-widest shrink-0">
            Código de colores
          </span>
          <div className="flex flex-wrap gap-2">
            {colorItems.map(({ label, classes }) => (
              <div
                key={label}
                className={`border rounded-md px-2.5 py-1 ${classes}`}
              >
                <span className="text-xs font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardLayout
