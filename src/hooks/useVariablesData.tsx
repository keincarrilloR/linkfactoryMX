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

export const useVariablesData = (): VariableData[] => {
  const { maquinaData } = useSocket()
  const v = maquinaData?.variables
  const estado = maquinaData?.informativo?.estadoYRun?.estadoMol1

  return [
    {
      title: 'Velocidad de Linea (Mts/min)',
      value: v?.velLineaMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      min: getMin(v?.velLineaMol1),
      max: getMax(v?.velLineaMol1),
      color: getColor(
        getMin(v?.velLineaMol1),
        getMax(v?.velLineaMol1),
        v?.velLineaMol1?.maxMinNom?.dbp_valnom || 0,
        v?.velLineaMol1?.actual || 0,
        estado
      ),
      icon: <Gauge className={classesIcons} />
    },
    {
      title: 'Corriente Precalentador Tocco (%A)',
      value: v?.corrToccoMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1',
      min: getMin(v?.corrToccoMol1),
      max: getMax(v?.corrToccoMol1),
      color: getColor(
        getMin(v?.corrToccoMol1),
        getMax(v?.corrToccoMol1),
        v?.corrToccoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.corrToccoMol1?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Finpass (A)',
      value: v?.corrFinpassMol1?.actual
        ? Number((v.corrFinpassMol1.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/76046ee620514f9aa4e6008ce98c906d?orgId=1',
      min: getMin(v?.corrFinpassMol1),
      max: getMax(v?.corrFinpassMol1),
      color: getColor(
        getMin(v?.corrFinpassMol1),
        getMax(v?.corrFinpassMol1),
        v?.corrFinpassMol1?.maxMinNom?.dbp_valnom || 0,
        v?.corrFinpassMol1?.actual
          ? Number((v?.corrFinpassMol1?.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Voltaje Thermatool (%V)',
      value: v?.voltThermatoolMol1?.actual ?? 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/df9fef453dcd4e58aa5d7feb544bb3c8?orgId=1',
      min: getMin(v?.voltThermatoolMol1),
      max: getMax(v?.voltThermatoolMol1),
      color: getColor(
        getMin(v?.voltThermatoolMol1),
        getMax(v?.voltThermatoolMol1),
        v?.voltThermatoolMol1?.maxMinNom?.dbp_valnom || 0,
        v?.voltThermatoolMol1?.actual || 0,
        estado
      ),
      icon: <Zap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Sizing (A)',
      value: v?.corrArmaduraSizingMol1?.actual
        ? Number((v.corrArmaduraSizingMol1.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/56b63eb4e6724e159caaa8e84165a6ee?orgId=1',
      min: getMin(v?.corrArmaduraSizingMol1),
      max: getMax(v?.corrArmaduraSizingMol1),
      color: getColor(
        getMin(v?.corrArmaduraSizingMol1),
        getMax(v?.corrArmaduraSizingMol1),
        v?.corrArmaduraSizingMol1?.maxMinNom?.dbp_valnom || 0,
        v?.corrArmaduraSizingMol1?.actual
          ? Number((v.corrArmaduraSizingMol1.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Armadura Breakdown (A)',
      value: v?.corrArmaduraBreakdownMol1?.actual
        ? Number((v.corrArmaduraBreakdownMol1.actual / 100).toFixed(2))
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/40e69cfe1bed470383a13b4c08f0b8ab?orgId=1',
      min: getMin(v?.corrArmaduraBreakdownMol1),
      max: getMax(v?.corrArmaduraBreakdownMol1),
      color: getColor(
        getMin(v?.corrArmaduraBreakdownMol1),
        getMax(v?.corrArmaduraBreakdownMol1),
        v?.corrArmaduraBreakdownMol1?.maxMinNom?.dbp_valnom || 0,
        v?.corrArmaduraBreakdownMol1?.actual
          ? Number((v.corrArmaduraBreakdownMol1.actual / 100).toFixed(2))
          : 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Corriente de Thermatool (%A)',
      value: v?.corrThermatoolMol1?.actual
        ? Number(v.corrThermatoolMol1.actual)
        : 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/d480ccd85d1347b382b771290cd830a0?orgId=1',
      min: getMin(v?.corrThermatoolMol1),
      max: getMax(v?.corrThermatoolMol1),
      color: getColor(
        getMin(v?.corrThermatoolMol1),
        getMax(v?.corrThermatoolMol1),
        v?.corrThermatoolMol1?.maxMinNom?.dbp_valnom || 0,
        v?.corrThermatoolMol1?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Voltaje Precalentador Tocco (V)',
      value: v?.voltPreToccoMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/66dd1e6b6e91409cb656251824e72f0a',
      min: getMin(v?.voltPreToccoMol1),
      max: getMax(v?.voltPreToccoMol1),
      color: getColor(
        getMin(v?.voltPreToccoMol1),
        getMax(v?.voltPreToccoMol1),
        v?.voltPreToccoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.voltPreToccoMol1?.actual || 0,
        estado
      ),
      icon: <PlugZap className={classesIcons} />
    },
    {
      title: 'Temp agua entrada precalentador tocco (°C)',
      value: v?.tempAguaDestEntPreToccoMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b41c71f0b160419bba1d7c82dad978ca?orgId=1',
      min: getMin(v?.tempAguaDestEntPreToccoMol1),
      max: getMax(v?.tempAguaDestEntPreToccoMol1),
      color: getColor(
        getMin(v?.tempAguaDestEntPreToccoMol1),
        getMax(v?.tempAguaDestEntPreToccoMol1),
        v?.tempAguaDestEntPreToccoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestEntPreToccoMol1?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Temp agua entrada thermatool (°C)',
      value: Math.floor(v?.tempAguaDestEntThermatoolMol1?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/fd7ae4e0347d4f64ad357dbf4395e6cb',
      min: getMin(v?.tempAguaDestEntThermatoolMol1),
      max: getMax(v?.tempAguaDestEntThermatoolMol1),
      color: getColor(
        getMin(v?.tempAguaDestEntThermatoolMol1),
        getMax(v?.tempAguaDestEntThermatoolMol1),
        v?.tempAguaDestEntThermatoolMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestEntThermatoolMol1?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Potencia Thermatool (kW)',
      value: v?.potThermatoolMol1?.actual || 0,
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/6bb14344159f45f9b1ce94d0118ffa6a',
      min: getMin(v?.potThermatoolMol1),
      max: getMax(v?.potThermatoolMol1),
      color: getColor(
        getMin(v?.potThermatoolMol1),
        getMax(v?.potThermatoolMol1),
        v?.potThermatoolMol1?.maxMinNom?.dbp_valnom || 0,
        v?.potThermatoolMol1?.actual || 0,
        estado
      ),
      icon: <Zap className={classesIcons} />
    },
    {
      title: 'Temp agua salida tocco (°C)',
      value: Math.ceil(v?.tempAguaDestSalPreToccoMol1?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/984bc55f8705400f902abe55b2dfd81a',
      min: getMin(v?.tempAguaDestSalPreToccoMol1),
      max: getMax(v?.tempAguaDestSalPreToccoMol1),
      color: getColor(
        getMin(v?.tempAguaDestSalPreToccoMol1),
        getMax(v?.tempAguaDestSalPreToccoMol1),
        v?.tempAguaDestSalPreToccoMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestSalPreToccoMol1?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    },
    {
      title: 'Temp agua salida thermatool (°C)',
      value: Math.ceil(v?.tempAguaDestSalThermatoolMol1?.actual || 0),
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/dbe8ea3e2c6f4ad8b559c32220e0bfc9?orgId=1',
      min: getMin(v?.tempAguaDestSalThermatoolMol1),
      max: getMax(v?.tempAguaDestSalThermatoolMol1),
      color: getColor(
        getMin(v?.tempAguaDestSalThermatoolMol1),
        getMax(v?.tempAguaDestSalThermatoolMol1),
        v?.tempAguaDestSalThermatoolMol1?.maxMinNom?.dbp_valnom || 0,
        v?.tempAguaDestSalThermatoolMol1?.actual || 0
      ),
      icon: <Droplet className={classesIcons} />
    }
  ]
}
