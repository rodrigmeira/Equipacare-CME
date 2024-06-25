import { modeloAutoclave } from "./modeloAutoclave";

export interface calcularAutoclavesInterface {
  volumeDiarioDeMaterialLitros: number;
  intervaloDePicoCME: number;
  modelos: modeloAutoclave[];
  numeroAutoclaves: number;
}
