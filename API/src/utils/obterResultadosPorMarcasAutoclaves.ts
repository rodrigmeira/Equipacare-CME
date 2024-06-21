import { filtrarModelos } from "./filtrarModelos";

export const obterResultadosPorMarcasAutoclaves = (
  resultados: any[],
  marcas: string[]
) => {
  return marcas.map((marca) => filtrarModelos(resultados, marca));
};
