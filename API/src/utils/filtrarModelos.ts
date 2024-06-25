export const filtrarModelos = (resultados: any[], marca: string) => {
  const resultadoModelos = resultados
    .filter(
      (item: any) =>
        item.nomeModelo.includes(marca) && item.percentualFormatado < 90
    )
    .sort((a: any, b: any) => b.percentualFormatado - a.percentualFormatado);

  const resultadoFinal = resultadoModelos.slice(0, 2);
  return resultadoFinal;
};
