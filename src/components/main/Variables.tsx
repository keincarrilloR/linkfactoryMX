import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'

const Variables: React.FC = () => {
  const { molinoData } = useSocket()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <h2 className="col-span-full text-lg font-semibold">Variables</h2>
      <StatusCard
        title="Velocidad (Mts/min)"
        value={molinoData?.velocidad.toString() || '--'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1"
        min="100"
        max="120"
        color="blue"
      />

      <StatusCard
        title="Corriente Tocco (A)"
        value={molinoData?.corr_tocco.toString() || '--'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1"
        min="100"
        max="120"
        color="blue"
      />
    </section>
  )
}

export default Variables
