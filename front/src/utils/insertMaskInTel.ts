export const insertMaskInTel = (tel: string) => {
  if (tel.length > 0 && tel.length < 3) {
    return tel.replace(/(\d{2})/g, "($1)");
  } else if (tel.length > 8) {
    return tel.replace(/(\d{5})(\d{1})/g, "$1-$2");
  }
};
