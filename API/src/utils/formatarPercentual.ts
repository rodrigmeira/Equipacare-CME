export const FormatarResposta = (num: number) => {
  const stringNum = num.toString();
  const pontoIndex = stringNum.indexOf(".");
  if (pontoIndex === -1) {
    return stringNum;
  }

  return stringNum.substring(0, pontoIndex + 3);
};
