import { Gauge, PillBottle, PlugZap, Thermometer, Waves } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'
import { classesIcons } from '../../styles/icons'

const Galvanizado: React.FC = () => {
  const { molinoData } = useSocket()
  const v = molinoData?.variables

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
      <h2 className="col-span-full text-lg font-semibold">Galvanizado</h2>

      <StatusCard
        title="Temperatura Horno Zinc (°C)"
        value={v?.tempZincMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1"
        min="453"
        max="482"
        color="orange"
      >
        <Thermometer className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temperatura Combustión (°C)"
        value={v?.tempCombustionMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1"
        min="450"
        max="520"
        color="orange"
      >
        <Thermometer className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Flujo Nitrógeno (L/min)"
        value={v?.flujoNitrogenoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Waves className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Presión Nitrógeno (PSI)"
        value={v?.presNitrogenoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PillBottle className={classesIcons} />
      </StatusCard>
    </section>
  )
}

export default Galvanizado
