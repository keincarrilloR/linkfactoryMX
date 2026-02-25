import DashboardLayout from './layout/Layout'
import Informativo from './components/main/Informativo'
import Galvanizado from './components/main/Galvanizado'
import Variables from './components/main/Variables'

const App = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Informativo />
        <Galvanizado />
        <Variables />
      </div>
    </DashboardLayout>
  )
}

export default App
