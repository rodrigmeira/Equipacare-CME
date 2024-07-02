export const insertMaskInTel = (tel: string) => {
  const noMask = tel.replace(/\D/g, "");
  const { length } = noMask;

  if (length <= 6) {
    return noMask.replace(/(\d{2})(\d{1})/, "($1)$2");
  } else if (length > 6 && length < 11) {
    return noMask.replace(/(\d{2})(\d{4})(\d{1})/, "($1)$2-$3");
  } else {
    return noMask.replace(/(\d{2})(\d{5})(\d{1})/, "($1)$2-$3");
  }
};
