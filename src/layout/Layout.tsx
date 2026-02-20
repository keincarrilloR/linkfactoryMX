import Clock from '../components/Clock'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-border">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-white">
          Molino 1 <span className="opacity-40 mx-1">—</span> MX
        </h1>
        <span className="text-base font-mono font-semibold text-white/70 tabular-nums">
          <Clock />
        </span>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
