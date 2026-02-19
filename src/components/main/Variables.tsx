import { Droplet, Gauge, PlugZap, Zap } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'
import { classesIcons } from '../../styles/icons'

const Variables: React.FC = () => {
  const { molinoData } = useSocket()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <h2 className="col-span-full text-lg font-semibold">Variables</h2>

      <StatusCard
        title="Velocidad de Linea (Mts/min)"
        value={molinoData?.VelLineaMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Gauge className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente Precalentador Tocco (%A)"
        value={molinoData?.CorrToccoMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente de Armadura Finpass (A)"
        value={
          molinoData?.CorrFinpassMol1
            ? (molinoData.CorrFinpassMol1 / 100).toFixed(2)
            : '0'
        }
        grafana="http://monitormx.rymco.io:9030/public-dashboards/76046ee620514f9aa4e6008ce98c906d?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Voltaje Thermatool (%V)"
        value={molinoData?.VoltThermatoolMol1?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/df9fef453dcd4e58aa5d7feb544bb3c8?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Zap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente de Armadura Sizing (A)"
        value={
          molinoData?.CorrArmaduraSizing
            ? (molinoData.CorrArmaduraSizing / 100).toFixed(2)
            : '0'
        }
        grafana="http://monitormx.rymco.io:9030/public-dashboards/56b63eb4e6724e159caaa8e84165a6ee?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente de Armadura Breakdown (A)"
        value={
          molinoData?.CorrArmaduraBreakdown
            ? (molinoData.CorrArmaduraBreakdown / 100).toFixed(2)
            : '0'
        }
        grafana="http://monitormx.rymco.io:9030/public-dashboards/40e69cfe1bed470383a13b4c08f0b8ab?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente de Thermatool (%A)"
        value={molinoData?.CorrThermatool?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/d480ccd85d1347b382b771290cd830a0?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Voltaje Precalentador Tocco (V)"
        value={molinoData?.VoltPreTocco?.toString() || '0'}
        grafana="http://monitomx.rymco.io:9030/public-dashboards/66dd1e6b6e91409cb656251824e72f0a"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temp agua entrada precalentador tocco (°C)"
        value={molinoData?.TempAguaDestEntPreTocco?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b41c71f0b160419bba1d7c82dad978ca?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temp agua entrada thermatool (°C)"
        value={Math.floor(
          molinoData?.TempAguaDestEntThermatool || 0
        ).toString()}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/fd7ae4e0347d4f64ad357dbf4395e6cb"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Potencia Thermatool (kW)"
        value={molinoData?.PotThermatool?.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/6bb14344159f45f9b1ce94d0118ffa6a"
        min="100"
        max="120"
        color="blue"
      >
        <Zap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temp agua salida tocco (°C)"
        value={Math.ceil(molinoData?.TempAguaDestSalPreTocco || 0).toString()}
        grafana="http://monitorm.rymco.io:9030/public-dashboards/984bc55f8705400f902abe55b2dfd81a"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Temp agua salida thermatool (°C)"
        value={Math.ceil(molinoData?.TempAguaDestSalThermatool || 0).toString()}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/dbe8ea3e2c6f4ad8b559c32220e0bfc9?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>
    </section>
  )
}

export default Variables
