import { filtrarModelos } from "./filtrarModelos";

export const obterResultadosFinais = (resultados: any[], marcas: string[]) => {
  return marcas.map((marca) => filtrarModelos(resultados, marca));
};
