import logo from "@/../public/logo-eqpc.webp";
import search from "@/../public/search.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-[#031125] flex flex-row items-center justify-around py-5">
      <div>
        <Image src={logo} alt="Logo Equipacare" width={140} height={50} />
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-4">
          <li className="text-[#91AB29] text-sm font-semibold">HOME</li>
          <li className="text-[#91AB29] text-sm font-semibold">BLOG</li>
          <li className="text-[#91AB29] text-sm font-semibold">SERVIÇOS</li>
          <li className="text-[#91AB29] text-sm font-semibold">MATERIAIS</li>
          <li className="text-[#91AB29] text-sm font-semibold">CLIENTES</li>
          <li className="text-[#91AB29] text-sm font-semibold">
            EQUIPACARE EDU
          </li>
          <li className="text-[#91AB29] text-sm font-semibold">FIX SYSTEM</li>
          <li className="text-[#91AB29] text-sm font-semibold">CONTATO</li>
          <li>
            <Image src={search} alt="Busca" width={16} height={16} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
