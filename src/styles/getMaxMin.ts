import type { Valores } from '../types/molinoData'

const getMin = (val?: Valores) => Number(val?.maxMinNom?.dbp_valmin ?? 0)

const getMax = (val?: Valores) => Number(val?.maxMinNom?.dbp_valmax ?? 0)

export { getMin, getMax }
