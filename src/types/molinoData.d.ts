interface Valores {
  max: number
  actual: number
  min: number
}

interface EstadoYRun {
  piezasMol1: number
  estadoMol1: string
  turnoMol1: string
}

interface OdtArtDesc {
  odt: string
  articulo: string
  descripcion: string
}

interface Tonelaje {
  tont: string
  maquina: string
}

interface Informativo {
  estadoYRun: EstadoYRun
  odtArtDesc: OdtArtDesc
  tonelaje: Tonelaje
}

interface Variables {
  presNitrogenoMol1: Valores
  velLineaMol1: Valores
  tempZincMol1: Valores
  flujoNitrogenoMol1: Valores
  tempCombustionMol1: Valores
  corrToccoMol1: Valores
  corrFinpassMol1: Valores
  voltThermatoolMol1: Valores
  corrArmaduraSizingMol1: Valores
  corrArmaduraBreakdownMol1: Valores
  corrThermatoolMol1: Valores
  voltPreToccoMol1: Valores
  tempAguaDestEntPreToccoMol1: Valores
  tempAguaDestEntThermatoolMol1: Valores
  potThermatoolMol1: Valores
  tempAguaDestSalPreToccoMol1: Valores
  tempAguaDestSalThermatoolMol1: Valores
}

interface Molino1Data {
  informativo: Informativo
  variables: Variables
}

export type { Molino1Data }
