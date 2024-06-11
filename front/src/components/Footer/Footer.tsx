import iconFace from "@/../public/icons/icon-face.svg";
import iconInsta from "@/../public/icons/icon-insta.svg";
import iconLinkedin from "@/../public/icons/icon-linkedin.svg";
import iconYoutube from "@/../public/icons/icon-youtube.svg";
import logo from "@/../public/logo-eqpc.webp";
import greatPlace from "@/../public/selos/greatPlaceToWork.svg";
import seloQualificacao from "@/../public/selos/seloQualificacao.svg";
import Image from "next/image";

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
        <p>
          Empresa de Engenharia para Clínicas e Hospitais com foco na
          Inteligência do Negócio.
        </p>
      </div>
      <div>
        <h3>Mapa do Site</h3>
        <nav>
          <li>Home</li>
          <li>Blog</li>
          <li>Serviços</li>
          <li>Engenharia Hospitalar</li>
          <li>Consultoria e Projetos</li>
          <li>Engenharia Clinica</li>
          <li>Manutenção e Calibração</li>
          <li>Materiais</li>
          <li>Clientes</li>
          <li>Equipacare Edu</li>
          <li>Fix System</li>
          <li>Contato</li>
        </nav>
      </div>
      <div>
        <h3>Contato</h3>
        <ul>
          <li>contato@equipacare.com.br</li>
          <li>+55(24)3348-7157</li>
          <li>+55(24)98119-1448</li>
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
