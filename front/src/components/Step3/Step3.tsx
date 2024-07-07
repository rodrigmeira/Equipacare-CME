import { InputRadio } from "./InputRadio";

export const Step3 = () => {
  return (
    <div className="flex flex-col gap-7 my-9">
      <InputRadio
        title="Hospital irá implementar uma nova CME ou já possui CME?"
        firstInput="vamosImplementar"
        firstChildren="Vamos implementar"
        secondInput="jaPossuo"
        secondChildren="Já possuo"
        name="possuiCME"
      />
      <InputRadio
        title="Se já possui uma CME, o que você deseja?"
        firstInput="ampliar"
        firstChildren="Ampliar"
        secondInput="jaPossuo"
        secondChildren="Substituir"
        name="ampliarSubstituir"
      />
    </div>
  );
};
