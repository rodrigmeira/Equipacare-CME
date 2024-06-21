import { Modelo } from "./Modelo";

export interface calcularAutoclavesInterface {
  VolumeDiarioDeMaterialLitros: number;
  IntervaloDePicoCME: number;
  modelos: Modelo[];
}
