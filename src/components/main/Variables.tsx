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
        value={molinoData?.velocidad.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Gauge className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Corriente Precalentador Tocco (%A)"
        value={molinoData?.corr_tocco.toString() || '0'}
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
          molinoData?.corr_finpass
            ? (molinoData.corr_finpass / 100).toFixed(2).toString()
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
        value={molinoData?.volt_thermatool.toString() || '0'}
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
          molinoData?.corr_sizing
            ? (molinoData.corr_sizing / 100).toFixed(2).toString()
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
          molinoData?.corr_breakdown
            ? (molinoData.corr_breakdown / 100).toFixed(2).toString()
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
        value={molinoData?.corr_thermatool.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/d480ccd85d1347b382b771290cd830a0?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Voltaje Precalentador Tocco (V)"
        value={molinoData?.volt_pre_tocco.toString() || '0'}
        grafana="http://monitomx.rymco.io:9030/public-dashboards/66dd1e6b6e91409cb656251824e72f0a"
        min="100"
        max="120"
        color="blue"
      >
        <PlugZap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="temp agua entrada precalentador tocco (°C)"
        value={molinoData?.temp_agua_dest_ent_tocco.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/b41c71f0b160419bba1d7c82dad978ca?orgId=1"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="temp agua entrada thermatool (°C)"
        value={
          Math.floor(
            molinoData?.temp_agua_dest_ent_thermatool || 0
          ).toString() || '0'
        }
        grafana="http://monitormx.rymco.io:9030/public-dashboards/fd7ae4e0347d4f64ad357dbf4395e6cb"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="Potencia Thermatool (kW)"
        value={molinoData?.pot_thermatool.toString() || '0'}
        grafana="http://monitormx.rymco.io:9030/public-dashboards/6bb14344159f45f9b1ce94d0118ffa6a"
        min="100"
        max="120"
        color="blue"
      >
        <Zap className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="temp agua salida tocco (°C)"
        value={
          Math.ceil(molinoData?.temp_agua_dest_sal_tocco || 0).toString() || '0'
        }
        grafana="http://monitorm.rymco.io:9030/public-dashboards/984bc55f8705400f902abe55b2dfd81a"
        min="100"
        max="120"
        color="blue"
      >
        <Droplet className={classesIcons} />
      </StatusCard>

      <StatusCard
        title="temp agua salida thermatool (°C)"
        value={
          Math.ceil(
            molinoData?.temp_agua_dest_sal_thermatool || 0
          ).toString() || '0'
        }
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
