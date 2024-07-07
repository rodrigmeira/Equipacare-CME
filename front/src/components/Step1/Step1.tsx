import { useContextForm } from "@/context/Context";
import { insertMaskInCep } from "@/utils/insertMaskInCep";
import { insertMaskInTel } from "@/utils/insertMaskInTel";
import { InputForm } from "../InputForm/InputForm";

export const Step1 = () => {
  const {
    nomeCompleto,
    setNomeCompleto,
    email,
    setEmail,
    telefone,
    setTelefone,
    nomeHospital,
    setNomeHospital,
    cnpj,
    setCnpj,
    cargo,
    setCargo,
    cep,
    setCep,
    numero,
    setNumero,
    rua,
    setRua,
    bairro,
    setBairro,
    cidade,
    setCidade,
    uf,
    setUf,
  } = useContextForm();

  return (
    <div className="flex flex-col gap-5 my-9">
      <InputForm
        type="text"
        id="nomeCompleto"
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
        placeholder="Digite seu nome"
        required
      >
        Nome Completo:
      </InputForm>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
          required
        >
          E-mail do Hospital:
        </InputForm>

        <InputForm
          type="text"
          id="telefone"
          value={insertMaskInTel(telefone)}
          onChange={(e) => setTelefone(e.target.value)}
          required
          placeholder="(00) 00000-0000"
        >
          Contato:
        </InputForm>
      </div>
      <InputForm
        type="text"
        id="nomeHospital"
        value={nomeHospital}
        onChange={(e) => setNomeHospital(e.target.value)}
        required
        placeholder="Digite o nome do hospital..."
      >
        Nome do hospital:
      </InputForm>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
          placeholder="00.000.000/0000-00"
        >
          CNPJ:
        </InputForm>

        <InputForm
          type="text"
          id="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
          placeholder="Ex: Diretor"
        >
          Cargo atual:
        </InputForm>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cep"
          value={insertMaskInCep(cep)}
          onChange={(e) => setCep(e.target.value)}
          required
          placeholder="00000-000"
        >
          CEP:
        </InputForm>

        <InputForm
          type="number"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
          placeholder="Ex: 12"
        >
          Número:
        </InputForm>
      </div>
      <InputForm
        type="text"
        id="rua"
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        required
        placeholder="Digite o nome da rua..."
      >
        Rua:
      </InputForm>
      <InputForm
        type="text"
        id="bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        required
        placeholder="Digite o nome do bairro..."
      >
        Bairro:
      </InputForm>

      <div className="flex flex-row justify-between gap-4">
        <InputForm
          type="text"
          id="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          placeholder="Digite a cidade..."
        >
          Cidade:
        </InputForm>

        <InputForm
          type="text"
          id="uf"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          required
          placeholder="Digite o estado..."
        >
          UF:
        </InputForm>
      </div>
    </div>
  );
};
