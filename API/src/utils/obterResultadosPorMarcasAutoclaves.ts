import { filtrarModelos } from "./filtrarModelos";

export const obterResultadosPorMarcaAutoclaves = (
  resultados: any[],
  marcas: string[]
) => {
  return marcas.map((marca) => filtrarModelos(resultados, marca));
};
