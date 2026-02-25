interface MaxMinNom {
  ma_desmac: string
  MolSuc: string
  dbp_device: string
  ar_codice: string
  ma_codice: string
  dbp_valmin: number
  dbp_valnom: number
  dbp_valmax: number
}

export interface Valores {
  actual: number
  maxMinNom: MaxMinNom
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
  tont: number
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

interface MaquinaData {
  informativo: Informativo
  variables: Variables
}

export type { MaquinaData }
