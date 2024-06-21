import { calcularAutoclaves } from "./calcularAutoclaves";

export const calcularResultadosAutoclaves = async (
  modelos: any[],
  inputs: any,
  volumeDiario: number
) => {
  const resultados: any[] = await Promise.all(
    modelos.map(async (modelo) => {
      const inputsCalcularModelos = {
        VolumeDiarioDeMaterialLitros: volumeDiario,
        IntervaloDePicoCME: inputs.IntervaloDePicoCME,
        modelos: [modelo],
      };

      return await calcularAutoclaves(inputsCalcularModelos);
    })
  );

  return resultados.flat().filter(Boolean);
};
