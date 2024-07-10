interface filtrarModelosProps {
  marca: string;
  modelo: string;
  preco: number;
}

export function filtrarModelos(modelos: filtrarModelosProps[], marca: string) {
  const modelo = modelos
    .filter((item: filtrarModelosProps) => item.marca.includes(marca))
    .sort((a, b) => a.preco - b.preco);

  if (modelo.length === 0) {
    return [
      {
        marca: marca,
        modelo: "Indisponível",
        preco: "Indisponível",
      },
    ];
  }

  return modelo;
}
