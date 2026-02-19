interface Informativo {
  odt: string
  articulo: string
  descripcion: string
}

interface General {
  turnoMol1: string
  estadoMol1: string
}

interface Variables {
  presNitrogenoMol1: number
  runMol1: boolean
  velLineaMol1: number
  piezasMol1: number
  tempZincMol1: number
  flujoNitrogenoMol1: number
  tempCombustionMol1: number
  corrToccoMol1: number
  corrFinpassMol1: number
  voltThermatoolMol1: number
  corrArmaduraSizingMol1: number
  corrArmaduraBreakdownMol1: number
  corrThermatoolMol1: number
  voltPreToccoMol1: number
  tempAguaDestEntPreToccoMol1: number
  tempAguaDestEntThermatoolMol1: number
  potThermatoolMol1: number
  tempAguaDestSalPreToccoMol1: number
  tempAguaDestSalThermatoolMol1: number
}

interface Molino1Data {
  general: General
  informativo: Informativo
  variables: Variables
}

export type { Molino1Data }
