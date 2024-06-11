import iconFace from "@/../public/icons/icon-face.svg";
import iconInsta from "@/../public/icons/icon-insta.svg";
import iconLinkedin from "@/../public/icons/icon-linkedin.svg";
import iconYoutube from "@/../public/icons/icon-youtube.svg";
import logo from "@/../public/logo-eqpc.webp";
import greatPlace from "@/../public/selos/greatPlaceToWork.svg";
import seloQualificacao from "@/../public/selos/seloQualificacao.svg";
import Image from "next/image";
import { ListItemFooter } from "./ListItemFooter";
import { SubTitleFooter } from "./SubTitleFooter";

export const Footer = () => {
  return (
    <div className="bg-[#454545] w-screen grid grid-cols-4 p-16 gap-8 text-base">
      <div>
        <Image
          src={logo}
          alt="Logo Equipacare"
          width={200}
          height={51}
          className="mb-8"
        />
        <p className="text-slate-200 font-extralight">
          Empresa de Engenharia para Clínicas e Hospitais com foco na
          Inteligência do Negócio.
        </p>
      </div>
      <div>
        <SubTitleFooter>Mapa Do Site</SubTitleFooter>
        <nav className="list-none">
          <ListItemFooter>Home</ListItemFooter>
          <ListItemFooter>Blog</ListItemFooter>
          <ListItemFooter>Serviços</ListItemFooter>
          <ListItemFooter>Engenharia Hospitalar</ListItemFooter>
          <ListItemFooter>Consultoria e Projetos</ListItemFooter>
          <ListItemFooter>Engenharia Clinica</ListItemFooter>
          <ListItemFooter>Manutenção e Calibração</ListItemFooter>
          <ListItemFooter>Materiais</ListItemFooter>
          <ListItemFooter>Clientes</ListItemFooter>
          <ListItemFooter>Equipacare Edu</ListItemFooter>
          <ListItemFooter>Fix System</ListItemFooter>
          <ListItemFooter>Contato</ListItemFooter>
        </nav>
      </div>
      <div>
        <SubTitleFooter>Contato</SubTitleFooter>
        <ul>
          <ListItemFooter>contato@equipacare.com.br</ListItemFooter>
          <ListItemFooter>+55(24)3348-7157</ListItemFooter>
          <ListItemFooter>+55(24)98119-1448</ListItemFooter>
        </ul>
      </div>
      <div>
        <SubTitleFooter>Acompanhe Nossas Redes Sociais</SubTitleFooter>
        <div>
          <Image src={iconFace} alt="Facebook" />
          <Image src={iconLinkedin} alt="Linkedin" />
          <Image src={iconYoutube} alt="Youtube" />
          <Image src={iconInsta} alt="Instagram" />
        </div>
        <div>
          <Image src={seloQualificacao} alt="Selo de Qualificação" />
          <Image src={greatPlace} alt="Selo  Great Place to Work" />
        </div>
      </div>
    </div>
  );
};
