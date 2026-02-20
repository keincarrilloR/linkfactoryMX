import Clock from '../components/Clock'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary">
      <header className="flex items-start justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border gap-3">
        <h1 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
          Molino 1 <span className="opacity-40 mx-1">—</span> MX
        </h1>
        <span className="text-xs sm:text-sm font-mono font-semibold text-white/70 tabular-nums text-right shrink-0">
          <Clock />
        </span>
      </header>

      <main className="px-3 sm:px-6 py-4 sm:py-6 space-y-6">{children}</main>
    </div>
  )
}

export default DashboardLayout
