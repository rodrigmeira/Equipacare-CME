import { Modelo } from "../interfaces";
import { calcularAutoclaves } from "./calcularAutoclaves";
import { obterResultadosFinais } from "./obterResultadosFinais";

export const calcularResultadosAutoclaves = async (
  modelos: Modelo[],
  IntervaloDePicoCME: any,
  volumeDiario: number,
  NumeroAutoclaves: number
) => {
  const resultados: any[] = await Promise.all(
    modelos.map(async (modelo) => {
      let inputsCalcularModelos = {
        VolumeDiarioDeMaterialLitros: volumeDiario,
        IntervaloDePicoCME: IntervaloDePicoCME,
        modelos: [modelo],
        NumeroAutoclaves: NumeroAutoclaves,
      };

      return await calcularAutoclaves(inputsCalcularModelos);
    })
  );

  const resultadosAchatados = resultados.flat().filter(Boolean);
  const resultadosFiltrados = obterResultadosFinais(resultadosAchatados, [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]);

  return [NumeroAutoclaves, resultadosFiltrados.flat()];
};
