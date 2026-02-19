import { Gauge, PillBottle, PlugZap, Thermometer, Waves } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'
import { classesIcons } from '../../styles/icons'

const Galvanizado: React.FC = () => {
  const { molinoData } = useSocket()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <h2 className="col-span-full text-lg font-semibold">Galvanizado</h2>

      <StatusCard
        title="Temperatura Horno Zinc (°C)"
        value={molinoData?.variables.tempZincMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1"
        min="453"
        max="482"
        color="orange"
      >
        <Thermometer className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temperatura Combustión (°C)"
        value={molinoData?.variables.tempCombustionMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1"
        min="450"
        max="520"
        color="orange"
      >
        <Thermometer className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Flujo Nitrógeno (L/min)"
        value={molinoData?.variables.flujoNitrogenoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Waves className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Presión Nitrógeno (PSI)"
        value={molinoData?.variables.presNitrogenoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PillBottle className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Velocidad (Mts/min)"
        value={molinoData?.variables.velLineaMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Gauge className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente Tocco (A)"
        value={molinoData?.variables.corrToccoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>
    </section>
  )
}

export default Galvanizado
