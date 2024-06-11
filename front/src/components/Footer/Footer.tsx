import iconFace from "@/../public/icons/icon-face.svg";
import iconInsta from "@/../public/icons/icon-insta.svg";
import iconLinkedin from "@/../public/icons/icon-linkedin.svg";
import iconYoutube from "@/../public/icons/icon-youtube.svg";
import logo from "@/../public/logo-eqpc.webp";
import greatPlace from "@/../public/selos/greatPlaceToWork.svg";
import seloQualificacao from "@/../public/selos/seloQualificacao.svg";
import Image from "next/image";
import { ListItem } from "./ListItem";

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
        <h3 className="text-white font-bold text-lg">Mapa Do Site</h3>
        <nav className="list-none">
          <ListItem>Home</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Serviços</ListItem>
          <ListItem>Engenharia Hospitalar</ListItem>
          <ListItem>Consultoria e Projetos</ListItem>
          <ListItem>Engenharia Clinica</ListItem>
          <ListItem>Manutenção e Calibração</ListItem>
          <ListItem>Materiais</ListItem>
          <ListItem>Clientes</ListItem>
          <ListItem>Equipacare Edu</ListItem>
          <ListItem>Fix System</ListItem>
          <ListItem>Contato</ListItem>
        </nav>
      </div>
      <div>
        <h3>Contato</h3>
        <ul>
          <ListItem>contato@equipacare.com.br</ListItem>
          <ListItem>+55(24)3348-7157</ListItem>
          <ListItem>+55(24)98119-1448</ListItem>
        </ul>
      </div>
      <div>
        <h3>Acompanhe Nossas Redes Sociais</h3>
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
