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
  nombre?: string
  actual: number
  maxMinNom: MaxMinNom
}

interface EstadoYRun {
  piezas: number
  estado: string
  turno: string
}

interface OdtArtDesc {
  odt: string
  articulo: string
  descripcion: string
}

interface Informativo {
  estadoYRun: EstadoYRun
  odtArtDesc: OdtArtDesc
  tonelaje: number
}

export interface Variables {
  presNitrogeno?: Valores
  tempZinc?: Valores
  flujoNitrogeno?: Valores
  tempCombustion?: Valores
  corrTocco?: Valores
  corrFinpass?: Valores
  voltPreTocco?: Valores
  corrArmaduraSizing?: Valores
  corrArmaduraBreakdown?: Valores
  tempAguaDestEntPreTocco?: Valores
  tempAguaDestSalPreTocco?: Valores
  corrArmaduraFormador?: Valores
  corrArmaduraCalibrador?: Valores
  velLinea?: Valores
  voltThermatool?: Valores
  corrThermatool?: Valores
  tempAguaDestEntThermatool?: Valores
  tempAguaDestSalThermatool?: Valores
  potThermatool?: Valores
  voltPlacaThermatool?: Valores
}

// Tipo para cada Maquina
interface MaquinaData {
  id: string
  nombre: string
  informativo: Informativo
  variables: Variables
}

export type { MaquinaData }
