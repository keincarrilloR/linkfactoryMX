import Clock from '../components/Clock'
import { useSocket } from '../hooks/useSocket'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  const { molinoData } = useSocket()
  return (
    <div className="min-h-screen bg-main text-font-primary p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MOLINO 1 - MX</h1>
        <span className="text-md opacity-80">
          <Clock />
        </span>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
