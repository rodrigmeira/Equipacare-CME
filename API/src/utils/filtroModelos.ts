export const filtroModelos = (resultados: any[], marca: string) => {
  const resultadoModelos = resultados
    .filter(
      (item: any) =>
        item.NomeModelo.includes(marca) && item.PercentualFormatado < 90
    )
    .sort((a: any, b: any) => b.PercentualFormatado - a.PercentualFormatado);

  const resultadoFinal = resultadoModelos.slice(0, 2);
  return resultadoFinal;
};
