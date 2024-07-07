import { InputForm } from "../InputForm/InputForm";

export const Step1 = () => {
  return (
    <div className="flex flex-col gap-5 my-9">
      <InputForm placeholder="Digite seu nome">Nome Completo:</InputForm>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="exemplo@email.com">
          E-mail do Hospital:
        </InputForm>

        <InputForm placeholder="(00) 00000-0000">Contato:</InputForm>
      </div>
      <InputForm placeholder="Digite o nome do hospital...">Nome do hospital:</InputForm>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="00.000.000/0000-00">
          CNPJ:
        </InputForm>

        <InputForm placeholder="Ex: Diretor">Cargo atual:</InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="00000-000">
          CEP:
        </InputForm>

        <InputForm placeholder="Ex: 12">Número:</InputForm>
      </div>
      <InputForm placeholder="Digite o nome da rua...">Rua:</InputForm>
      <InputForm placeholder="Digite o nome do bairro...">Bairro:</InputForm>
      
      <div className="flex flex-row justify-between gap-4">
        <InputForm placeholder="Digite a cidade...">
          Cidade:
        </InputForm>

        <InputForm placeholder="Digite o estado...">UF:</InputForm>
      </div>
    </div>
  );
};
