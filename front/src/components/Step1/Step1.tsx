import { InputForm } from "../InputForm/InputForm";

export const Step1 = () => {
  return (
    <div>
      <InputForm placeholder="Digite seu nome">Nome Completo:</InputForm>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="exemplo@email.com">
          E-mail do Hospital:
        </InputForm>
        <InputForm placeholder="(00) 00000-00">Contato:</InputForm>
      </div>
    </div>
  );
};
