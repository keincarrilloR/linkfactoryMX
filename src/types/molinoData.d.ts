interface Informativo {
  odt: string
  articulo: string
  descripcion: string
}

interface Variables {
  TurnoMolinos: string
  PresNitrogegoMol1: number
  RunMol1: boolean
  VelLineaMol1: number
  PiezasMol1: number
  TempZincMol1: number
  EstadoMol1: string
  FlujoNitrogenoMol1: number
  TempCombustionMol1: number
  CorrToccoMol1: number
  CorrFinpassMol1: number
  VoltThermatoolMol1: number
  CorrArmaduraSizing: number
  CorrArmaduraBreakdown: number
  CorrThermatool: number
  VoltPreTocco: number
  TempAguaDestEntPreTocco: number
  TempAguaDestEntThermatool: number
  PotThermatool: number
  TempAguaDestSalPreTocco: number
  TempAguaDestSalThermatool: number
}

interface Molino1Data {
  Informativo: Informativo
  Variables: Variables
}

export type { Molino1Data }
