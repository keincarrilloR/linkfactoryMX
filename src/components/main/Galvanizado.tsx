import { PillBottle, Thermometer, Waves } from 'lucide-react'
import { useSocket } from '../../hooks/useSocket'
import StatusCard from '../cards/StatusCard'
import { classesIcons } from '../../styles/icons'

import { getColor } from '../../utils/getColor'

import Title from '../Title'
import { getMin, getMax } from '../../styles/getMaxMin'

const Galvanizado: React.FC = () => {
  const { molinoData } = useSocket()
  const v = molinoData?.variables

  return (
    <>
      <Title title="Galvanizado" />

      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        <StatusCard
          title="Temperatura Horno Zinc (°C)"
          value={v?.tempZincMol1?.actual || 0}
          grafana="http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1"
          min={getMin(v?.tempZincMol1)}
          max={getMax(v?.tempZincMol1)}
          color={getColor(
            getMin(v?.tempZincMol1) || 0,
            getMax(v?.tempZincMol1) || 0,
            v?.tempZincMol1?.maxMinNom?.dbp_valnom || 0,
            v?.tempZincMol1?.actual || 0
          )}
        >
          <Thermometer className={classesIcons} />
        </StatusCard>

        <StatusCard
          title="Temperatura Combustión (°C)"
          value={v?.tempCombustionMol1?.actual || 0}
          grafana="http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1"
          min={getMin(v?.tempCombustionMol1)}
          max={getMax(v?.tempCombustionMol1)}
          color={getColor(
            getMin(v?.tempCombustionMol1) || 0,
            getMax(v?.tempCombustionMol1) || 0,
            v?.tempCombustionMol1?.maxMinNom?.dbp_valnom || 0,
            v?.tempCombustionMol1?.actual || 0
          )}
        >
          <Thermometer className={classesIcons} />
        </StatusCard>

        <StatusCard
          title="Flujo Nitrógeno (L/min)"
          value={v?.flujoNitrogenoMol1?.actual || 0}
          grafana="http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1"
          min={getMin(v?.flujoNitrogenoMol1)}
          max={getMax(v?.flujoNitrogenoMol1)}
          color={getColor(
            getMin(v?.flujoNitrogenoMol1) || 0,
            getMax(v?.flujoNitrogenoMol1) || 0,
            v?.flujoNitrogenoMol1?.maxMinNom?.dbp_valnom || 0,
            v?.flujoNitrogenoMol1?.actual || 0
          )}
        >
          <Waves className={classesIcons} />
        </StatusCard>

        <StatusCard
          title="Presión Nitrógeno (PSI)"
          value={v?.presNitrogenoMol1?.actual || 0}
          grafana="http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1"
          min={getMin(v?.presNitrogenoMol1)}
          max={getMax(v?.presNitrogenoMol1)}
          color={getColor(
            getMin(v?.presNitrogenoMol1) || 0,
            getMax(v?.presNitrogenoMol1) || 0,
            v?.presNitrogenoMol1?.maxMinNom?.dbp_valnom || 0,
            v?.presNitrogenoMol1?.actual || 0
          )}
        >
          <PillBottle className={classesIcons} />
        </StatusCard>
      </section>
    </>
  )
}

export default Galvanizado
