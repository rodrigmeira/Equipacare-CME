import { useContextForm } from "@/context/Context";
import { useRouter } from "next/navigation";

export const validationContext = () => {
  const { nomeCompleto, telefone, email, cepHospital, cargo } =
    useContextForm();

  const router = useRouter();

  if (
    nomeCompleto.length === 0 &&
    telefone.length === 0 &&
    email.length === 0 &&
    cepHospital.length === 0 &&
    cargo.length === 0
  ) {
    router.push("/formulario");
  }
};
