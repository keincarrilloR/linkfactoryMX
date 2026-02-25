import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Galvanizado from './components/main/Galvanizado'
import Variables from './components/main/Variables'
import { MAQUINAS } from './config/maquinas'
import Clock from './components/Clock'

const App = () => {
  return (
    <DashboardLayout>
      {MAQUINAS.map(({ id, nombre }) => (
        <div className="grid gap-6" key={id}>
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border gap-3">
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
              {nombre} <span className="opacity-40 mx-1">—</span> MX
            </h1>
            <span className="text-xs sm:text-base font-mono text-white/80 tabular-nums text-right shrink-0">
              <Clock />
            </span>
          </div>
          <Informativo maquinaId={id} />
          <Galvanizado maquinaId={id} />
          <Variables maquinaId={id} />
        </div>
      ))}
    </DashboardLayout>
  )
}

export default App
