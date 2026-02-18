import Clock from '../components/Clock'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary p-6 space-y-6">
      <header className="md:flex md:justify-between md:items-center">
        <h1 className="text-xl font-bold uppercase">molino 1 - mx</h1>
        <span className="text-md opacity-80">
          <Clock />
        </span>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
