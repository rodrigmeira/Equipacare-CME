import { modeloAutoclave } from "../interfaces";
import { calcularAutoclaves } from "./calcularAutoclaves";
import { obterResultadosFinais } from "./obterResultadosFinais";

export const calcularResultadosAutoclaves = async (
  modelos: modeloAutoclave[],
  intervaloDePicoCME: any,
  volumeDiario: number,
  numeroAutoclaves: number
) => {
  const resultados: any[] = await Promise.all(
    modelos.map(async (modelo) => {
      let inputsCalcularModelos = {
        volumeDiarioDeMaterialLitros: volumeDiario,
        intervaloDePicoCME: intervaloDePicoCME,
        modelos: [modelo],
        numeroAutoclaves: numeroAutoclaves,
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

  return [numeroAutoclaves, resultadosFiltrados.flat()];
};
