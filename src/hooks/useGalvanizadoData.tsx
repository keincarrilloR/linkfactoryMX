import { PillBottle, Thermometer, Waves } from 'lucide-react'
import { useSocket } from './useSocket'
import { classesIcons } from '../styles/icons'
import { getColor } from '../utils/getColor'
import { getMin, getMax } from '../styles/getMaxMin'
import type { JSX } from 'react'

interface GalvanizadoData {
  title: string
  value: number
  grafana: string
  min: number
  max: number
  color: 'green' | 'orange' | 'red' | 'purple' | 'stop' | 'black'
  icon: JSX.Element
}

export const useGalvanizadoData = (): GalvanizadoData[] => {
  const { molinoData } = useSocket()
  const v = molinoData?.variables

  return [
    {
      title: 'Temperatura Horno Zinc (°C)',
      value: v?.tempZincMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1',
      min: getMin(v?.tempZincMol1),
      max: getMax(v?.tempZincMol1),
      color: getColor(
        getMin(v?.tempZincMol1),
        getMax(v?.tempZincMol1),
        v?.tempZincMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempZincMol1?.actual || 0
      ),
      icon: <Thermometer className={classesIcons} />
    },
    {
      title: 'Temperatura Combustión (°C)',
      value: v?.tempCombustionMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1',
      min: getMin(v?.tempCombustionMol1),
      max: getMax(v?.tempCombustionMol1),
      color: getColor(
        getMin(v?.tempCombustionMol1),
        getMax(v?.tempCombustionMol1),
        v?.tempCombustionMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempCombustionMol1?.actual || 0
      ),
      icon: <Thermometer className={classesIcons} />
    },
    {
      title: 'Flujo Nitrógeno (L/min)',
      value: v?.flujoNitrogenoMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1',
      min: getMin(v?.flujoNitrogenoMol1),
      max: getMax(v?.flujoNitrogenoMol1),
      color: getColor(
        getMin(v?.flujoNitrogenoMol1),
        getMax(v?.flujoNitrogenoMol1),
        v?.flujoNitrogenoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.flujoNitrogenoMol1?.actual || 0
      ),
      icon: <Waves className={classesIcons} />
    },
    {
      title: 'Presión Nitrógeno (PSI)',
      value: v?.presNitrogenoMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1',
      min: getMin(v?.presNitrogenoMol1),
      max: getMax(v?.presNitrogenoMol1),
      color: getColor(
        getMin(v?.presNitrogenoMol1),
        getMax(v?.presNitrogenoMol1),
        v?.presNitrogenoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.presNitrogenoMol1?.actual || 0
      ),
      icon: <PillBottle className={classesIcons} />
    }
  ]
}
