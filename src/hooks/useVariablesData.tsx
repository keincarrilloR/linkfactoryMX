import { Droplet, Gauge, PlugZap, Zap } from 'lucide-react'
import { useSocket } from './useSocket'
import { classesIcons } from '../styles/icons'
import getColor from '../utils/getColor'
import { getMax, getMin } from '../styles/getMaxMin'
import type { JSX } from 'react'

interface VariableData {
  title: string
  value: number
  grafana: string
  min: number
  max: number
  color: 'green' | 'orange' | 'red' | 'purple' | 'stop' | 'black'
  icon: JSX.Element
}

export const useVariablesData = (maquinaId: string): VariableData[] => {
  const { getMaquina } = useSocket()
  const v = getMaquina(maquinaId)?.variables
  const estado = getMaquina(maquinaId)?.informativo?.estadoYRun?.estado

  return [
    {
      title: 'Velocidad de Linea (Mts/min)',
      value: v?.velLinea?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      min: getMin(v?.velLinea),
      max: getMax(v?.velLinea),
      color: getColor(
        getMin(v?.velLinea),
        getMax(v?.velLinea),
        v?.velLinea?.maxMinNom?.dbp_valnom || 0,
        v?.velLinea?.actual || 0,
        estado
      ),
      icon: <Gauge className={classesIcons} />
    },
    {
      title: 'Corriente Precalentador Tocco (%A)',
      value: v?.corrTocco?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1',
      min: getMin(v?.corrTocco),
      max: getMax(v?.corrTocco),
      color: getColor(
        getMin(v?.corrTocco),
        getMax(v?.corrTocco),
        v?.corrTocco?.maxMinNom?.dbp_valnom || 0,
        v?.corrTocco?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Finpass (A)',
      value: v?.corrFinpass?.actual
        ? Number((v.corrFinpass.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/76046ee620514f9aa4e6008ce98c906d?orgId=1',
      min: getMin(v?.corrFinpass),
      max: getMax(v?.corrFinpass),
      color: getColor(
        getMin(v?.corrFinpass),
        getMax(v?.corrFinpass),
        v?.corrFinpass?.maxMinNom?.dbp_valnom || 0,
        v?.corrFinpass?.actual
          ? Number((v?.corrFinpass?.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Voltaje Thermatool (%V)',
      value: v?.voltThermatool?.actual ?? 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/df9fef453dcd4e58aa5d7feb544bb3c8?orgId=1',
      min: getMin(v?.voltThermatool),
      max: getMax(v?.voltThermatool),
      color: getColor(
        getMin(v?.voltThermatool),
        getMax(v?.voltThermatool),
        v?.voltThermatool?.maxMinNom?.dbp_valnom || 0,
        v?.voltThermatool?.actual || 0,
        estado
      ),
      icon: <Zap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Sizing (A)',
      value: v?.corrArmaduraSizing?.actual
        ? Number((v.corrArmaduraSizing.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/56b63eb4e6724e159caaa8e84165a6ee?orgId=1',
      min: getMin(v?.corrArmaduraSizing),
      max: getMax(v?.corrArmaduraSizing),
      color: getColor(
        getMin(v?.corrArmaduraSizing),
        getMax(v?.corrArmaduraSizing),
        v?.corrArmaduraSizing?.maxMinNom?.dbp_valnom || 0,
        v?.corrArmaduraSizing?.actual
          ? Number((v.corrArmaduraSizing.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Breakdown (A)',
      value: v?.corrArmaduraBreakdown?.actual
        ? Number((v.corrArmaduraBreakdown.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/40e69cfe1bed470383a13b4c08f0b8ab?orgId=1',
      min: getMin(v?.corrArmaduraBreakdown),
      max: getMax(v?.corrArmaduraBreakdown),
      color: getColor(
        getMin(v?.corrArmaduraBreakdown),
        getMax(v?.corrArmaduraBreakdown),
        v?.corrArmaduraBreakdown?.maxMinNom?.dbp_valnom || 0,
        v?.corrArmaduraBreakdown?.actual
          ? Number((v.corrArmaduraBreakdown.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Thermatool (%A)',
      value: v?.corrThermatool?.actual ? Number(v.corrThermatool.actual) : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/d480ccd85d1347b382b771290cd830a0?orgId=1',
      min: getMin(v?.corrThermatool),
      max: getMax(v?.corrThermatool),
      color: getColor(
        getMin(v?.corrThermatool),
        getMax(v?.corrThermatool),
        v?.corrThermatool?.maxMinNom?.dbp_valnom || 0,
        v?.corrThermatool?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Voltaje Precalentador Tocco (V)',
      value: v?.voltPreTocco?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/66dd1e6b6e91409cb656251824e72f0a',
      min: getMin(v?.voltPreTocco),
      max: getMax(v?.voltPreTocco),
      color: getColor(
        getMin(v?.voltPreTocco),
        getMax(v?.voltPreTocco),
        v?.voltPreTocco?.maxMinNom?.dbp_valnom || 0,
        v?.voltPreTocco?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Temp agua entrada precalentador tocco (°C)',
      value: v?.tempAguaDestEntPreTocco?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b41c71f0b160419bba1d7c82dad978ca?orgId=1',
      min: getMin(v?.tempAguaDestEntPreTocco),
      max: getMax(v?.tempAguaDestEntPreTocco),
      color: getColor(
        getMin(v?.tempAguaDestEntPreTocco),
        getMax(v?.tempAguaDestEntPreTocco),
        v?.tempAguaDestEntPreTocco?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestEntPreTocco?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Temp agua entrada thermatool (°C)',
      value: Math.floor(v?.tempAguaDestEntThermatool?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/fd7ae4e0347d4f64ad357dbf4395e6cb',
      min: getMin(v?.tempAguaDestEntThermatool),
      max: getMax(v?.tempAguaDestEntThermatool),
      color: getColor(
        getMin(v?.tempAguaDestEntThermatool),
        getMax(v?.tempAguaDestEntThermatool),
        v?.tempAguaDestEntThermatool?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestEntThermatool?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Potencia Thermatool (kW)',
      value: v?.potThermatool?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/6bb14344159f45f9b1ce94d0118ffa6a',
      min: getMin(v?.potThermatool),
      max: getMax(v?.potThermatool),
      color: getColor(
        getMin(v?.potThermatool),
        getMax(v?.potThermatool),
        v?.potThermatool?.maxMinNom?.dbp_valnom || 0,
        v?.potThermatool?.actual || 0,
        estado
      ),
      icon: <Zap className={classesIcons} />
    },
    {
      title: 'Temp agua salida tocco (°C)',
      value: Math.ceil(v?.tempAguaDestSalPreTocco?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/984bc55f8705400f902abe55b2dfd81a',
      min: getMin(v?.tempAguaDestSalPreTocco),
      max: getMax(v?.tempAguaDestSalPreTocco),
      color: getColor(
        getMin(v?.tempAguaDestSalPreTocco),
        getMax(v?.tempAguaDestSalPreTocco),
        v?.tempAguaDestSalPreTocco?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestSalPreTocco?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Temp agua salida thermatool (°C)',
      value: Math.ceil(v?.tempAguaDestSalThermatool?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/dbe8ea3e2c6f4ad8b559c32220e0bfc9?orgId=1',
      min: getMin(v?.tempAguaDestSalThermatool),
      max: getMax(v?.tempAguaDestSalThermatool),
      color: getColor(
        getMin(v?.tempAguaDestSalThermatool),
        getMax(v?.tempAguaDestSalThermatool),
        v?.tempAguaDestSalThermatool?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestSalThermatool?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    }
  ]
}
