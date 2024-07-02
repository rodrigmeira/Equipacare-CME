export const insertMaskInCep = (cep: string) => {
  return cep.replace(/(\d{5})(\d{1})/g, "$1-$2");
};
