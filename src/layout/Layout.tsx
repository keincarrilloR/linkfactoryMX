import Clock from '../components/Clock'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MOLINO 1 - MX</h1>
        <span className="text-md opacity-80">
          <Clock
            fechaHoraMX="2026-02-12 09:38:11"
            fechaHoraMV="2026-02-12 09:38:11"
          />
        </span>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
