import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Galvanizado from './components/main/Galvanizado'
import Variables from './components/main/Variables'
import Conectado from './components/main/Conectado'

const App = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Informativo />
        <Galvanizado />
        <Variables />
        <Conectado />
      </div>
    </DashboardLayout>
  )
}

export default App
