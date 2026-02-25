import { PillBottle, Thermometer, Waves } from 'lucide-react'
import { useSocket } from './useSocket'
import { classesIcons } from '../styles/icons'
import getColor from '../utils/getColor'
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

export const useGalvanizadoData = (maquinaId: string): GalvanizadoData[] => {
  const { getMaquina } = useSocket()
  const v = getMaquina(maquinaId)?.variables

  return [
    {
      title: 'Temperatura Horno Zinc (°C)',
      value: v?.tempZinc?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1',
      min: getMin(v?.tempZinc),
      max: getMax(v?.tempZinc),
      color: getColor(
        getMin(v?.tempZinc),
        getMax(v?.tempZinc),
        v?.tempZinc?.maxMinNom?.dbp_valnom || 0,
        v?.tempZinc?.actual || 0
      ),
      icon: <Thermometer className={classesIcons} />
    },
    {
      title: 'Temperatura Combustión (°C)',
      value: v?.tempCombustion?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1',
      min: getMin(v?.tempCombustion),
      max: getMax(v?.tempCombustion),
      color: getColor(
        getMin(v?.tempCombustion),
        getMax(v?.tempCombustion),
        v?.tempCombustion?.maxMinNom?.dbp_valnom || 0,
        v?.tempCombustion?.actual || 0
      ),
      icon: <Thermometer className={classesIcons} />
    },
    {
      title: 'Flujo Nitrógeno (L/min)',
      value: v?.flujoNitrogeno?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1',
      min: getMin(v?.flujoNitrogeno),
      max: getMax(v?.flujoNitrogeno),
      color: getColor(
        getMin(v?.flujoNitrogeno),
        getMax(v?.flujoNitrogeno),
        v?.flujoNitrogeno?.maxMinNom?.dbp_valnom || 0,
        v?.flujoNitrogeno?.actual || 0
      ),
      icon: <Waves className={classesIcons} />
    },
    {
      title: 'Presión Nitrógeno (PSI)',
      value: v?.presNitrogeno?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1',
      min: getMin(v?.presNitrogeno),
      max: getMax(v?.presNitrogeno),
      color: getColor(
        getMin(v?.presNitrogeno),
        getMax(v?.presNitrogeno),
        v?.presNitrogeno?.maxMinNom?.dbp_valnom || 0,
        v?.presNitrogeno?.actual || 0
      ),
      icon: <PillBottle className={classesIcons} />
    }
  ]
}
