// "use client";

// import { ButtonForm, InputForm } from "@/components";
// import { useContextForm } from "@/context/Context";
// import { insertMaskInCep } from "@/utils/insertMaskInCep";
// import { insertMaskInTel } from "@/utils/insertMaskInTel";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FormEvent, useState } from "react";

// export default function CadastroPage() {
//   const {
//     nomeHospital,
//     setNomeHospital,
//     endereco,
//     setEndereco,
//     cnpj,
//     setCnpj,
//     cepHospital,
//     setCepHospital,
//     possuiCME,
//     setPossuiCME,
//     implantarCME,
//     setImplantarCME,
//     ampliacao,
//     setAmpliacao,
//     substituicao,
//     setSubstituicao,
//     nomeCompleto,
//     setNomeCompleto,
//     telefone,
//     setTelefone,
//     email,
//     setEmail,
//     cargo,
//     setCargo,
//   } = useContextForm();

//   const router = useRouter();

//   const [formError, setFormError] = useState("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (
//       nomeHospital &&
//       endereco &&
//       cnpj &&
//       cepHospital &&
//       (possuiCME || implantarCME) &&
//       (ampliacao || substituicao) &&
//       nomeCompleto &&
//       telefone &&
//       email &&
//       cargo
//     ) {
//       router.push("/formulario/calculadora");
//     } else {
//       setFormError("Por favor, preencha todos os campos.");
//     }
//   };

//   return (
//     <div className="py-10  w-11/12 md:w-4/5">
//       <div className="relative mb-10 w-full h-56">
//         <Image
//           src="/form-calc.jpg"
//           alt="Imagem de fundo"
//           className="object-cover w-full h-full rounded-3xl shadow-lg"
//           layout="fill"
//         />
//         <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-[#00132999] flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-xl md:text-4xl font-bold">
//             Preencha o formulário para ter acesso a calculadora
//           </h1>
//           <h3 className="text-base md:text-2xl mt-4">
//             Com alguns dados nossa calculadora te entrega uma estimativa da
//             quantidade e quais equipamentos são ideais para atender melhor seu
//             hospital, de maneira fácil e rápida.
//           </h3>
//           <span className="text-xs md:text-sm mt-2">
//             Obs: a ferramenta tem suas limitações, para uma estimativa mais
//             precisa entre em contato com nossa equipe de vendedores
//           </span>
//         </div>
//       </div>

//       <form
//         className="md:grid md:grid-cols-2 md:gap-8 "
//         onSubmit={handleSubmit}
//       >
//         <div className=" bg-white mb-5 flex flex-col justify-center p-9 border-2 border-color-primary rounded-xl">
//           <h2 className="text-xl font-semibold mb-4">Dados do Hospital</h2>
//           <InputForm
//             type="text"
//             id="nomeHospital"
//             placeholder="Ex. Hospital Honório Rebolsa"
//             value={nomeHospital}
//             onChange={(e) => setNomeHospital(e.target.value)}
//             required
//           >
//             Nome
//           </InputForm>

//           <InputForm
//             type="text"
//             id="endereco"
//             placeholder="Rua, bairro, cidade, estado"
//             value={endereco}
//             onChange={(e) => setEndereco(e.target.value)}
//             required
//           >
//             Endereço
//           </InputForm>

//           <div className="md:grid md:grid-cols-2 md:gap-4">
//             <InputForm
//               type="text"
//               id="cnpj"
//               placeholder="00.000.000/0000-00"
//               value={cnpj}
//               onChange={(e) => setCnpj(e.target.value)}
//               required
//             >
//               CNPJ
//             </InputForm>

//             <InputForm
//               type="text"
//               id="cepHospital"
//               placeholder="00000-000"
//               value={insertMaskInCep(cepHospital)}
//               onChange={(e) => setCepHospital(e.target.value)}
//               maxLength={9}
//               minLength={9}
//               required
//             >
//               CEP
//             </InputForm>
//           </div>

//           <label className="font-semibold text-base mb-2">
//             O hospital irá implantar uma nova CME ou já possui?
//           </label>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div className="flex justify-start items-center">
//               <input
//                 type="radio"
//                 id="jaPossuiCME"
//                 name="cmeStatus"
//                 checked={possuiCME}
//                 onChange={() => {
//                   setPossuiCME(true);
//                   setImplantarCME(false);
//                 }}
//                 className="size-5 accent-color-primary"
//               />
//               <label className="ml-2" htmlFor="jaPossuiCME">
//                 Já possui
//               </label>
//             </div>
//             <div className="flex justify-start items-center">
//               <input
//                 type="radio"
//                 id="implantarCME"
//                 name="cmeStatus"
//                 checked={implantarCME}
//                 onChange={() => {
//                   setImplantarCME(true);
//                   setPossuiCME(false);
//                 }}
//                 className="size-5 accent-color-primary"
//               />
//               <label className="ml-2" htmlFor="implantarCME">
//                 Irá implantar nova CME
//               </label>
//             </div>
//           </div>

//           <label className="font-semibold text-base mb-2">
//             Se já possui CME, será substituição ou ampliação?
//           </label>
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             <div className="flex justify-start items-center">
//               <input
//                 type="radio"
//                 id="ampliacao"
//                 name="ampliacaoSubstituicao"
//                 checked={ampliacao}
//                 onChange={() => {
//                   setAmpliacao(true);
//                   setSubstituicao(false);
//                 }}
//                 className="size-5 accent-color-primary"
//               />
//               <label className="ml-2" htmlFor="ampliacao">
//                 Ampliação
//               </label>
//             </div>
//             <div className="flex justify-start items-center">
//               <input
//                 type="radio"
//                 id="substituicao"
//                 name="ampliacaoSubstituicao"
//                 checked={substituicao}
//                 onChange={() => {
//                   setSubstituicao(true);
//                   setAmpliacao(false);
//                 }}
//                 className="size-5 accent-color-primary"
//               />
//               <label className="ml-2" htmlFor="substituicao">
//                 Substituição
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className=" mb-2 flex flex-col justify-center   ">
//           <div className="bg-white border-2 border-color-primary rounded-xl p-10">
//             <h2 className="text-xl font-semibold mb-4">Dados para Contato</h2>
//             <InputForm
//               type="text"
//               id="nomeCompleto"
//               placeholder="Seu nome completo"
//               value={nomeCompleto}
//               onChange={(e) => setNomeCompleto(e.target.value)}
//               required
//             >
//               Nome
//             </InputForm>

//             <InputForm
//               type="email"
//               id="email"
//               placeholder="Seu e-mail"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             >
//               E-mail
//             </InputForm>
//             <div className="md:grid md:grid-cols-2 md:gap-4">
//               <InputForm
//                 type="text"
//                 id="telefone"
//                 placeholder="(00) 00000-0000"
//                 value={insertMaskInTel(telefone)}
//                 onChange={(e) => setTelefone(e.target.value)}
//                 required
//                 maxLength={14}
//                 minLength={13}
//               >
//                 Celular
//               </InputForm>

//               <InputForm
//                 type="text"
//                 id="cargo"
//                 placeholder="Ex. Diretor"
//                 value={cargo}
//                 onChange={(e) => setCargo(e.target.value)}
//                 required
//               >
//                 Cargo
//               </InputForm>
//             </div>
//           </div>
//           <div className="text-justify pl-3 pr-3 pt-1">
//             <p>
//               Ao compartilhar suas informações de contato, você consente
//               explicitamente com a Equipacare para o uso desses dados,
//               direcionado ao envio de comunicações relacionadas aos serviços de
//               engenharia clínica e hospitalar.
//             </p>
//           </div>
//           <div className="flex justify-center mt-8">
//             <ButtonForm>AVANÇAR PARA A CALCULADORA</ButtonForm>
//           </div>
//         </div>

//         {formError && <p className="text-red-500 col-span-2">{formError}</p>}
//       </form>
//     </div>
//   );
// }
