interface filtrarModelosProps {
  marca: string;
  modelo: string;
  preco: number;
}

export function filtrarModelos(modelos: filtrarModelosProps[], marca: string) {
  const modelo = modelos
    .filter((item: filtrarModelosProps) => item.marca.includes(marca))
    .sort((a, b) => a.preco - b.preco);

  return modelo;
}
