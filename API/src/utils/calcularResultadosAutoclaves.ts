import { calcularAutoclaves } from "./calcularAutoclaves";

export const calcularResultadosAutoclaves = async (
  modelos: any[],
  IntervaloDePicoCME: any,
  volumeDiario: number
) => {
  const resultados: any[] = await Promise.all(
    modelos.map(async (modelo) => {
      const inputsCalcularModelos = {
        VolumeDiarioDeMaterialLitros: volumeDiario,
        IntervaloDePicoCME: IntervaloDePicoCME,
        modelos: [modelo],
      };

      return await calcularAutoclaves(inputsCalcularModelos);
    })
  );

  return resultados.flat().filter(Boolean);
};
