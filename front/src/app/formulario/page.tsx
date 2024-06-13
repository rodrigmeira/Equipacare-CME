"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
    nomeCompleto: string;
    telefone: string;
    email: string;
    cepHospital: string;
    cargo: string;
    possuiConhecimentoTecnico1: boolean;
    possuiConhecimentoTecnico2: boolean;
}

export default function CadastroPage() {
    const [formData, setFormData] = useState<FormData>({
        nomeCompleto: "",
        telefone: "",
        email: "",
        cepHospital: "",
        cargo: "",
        possuiConhecimentoTecnico1: false,
        possuiConhecimentoTecnico2: false
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="grid grid-flow-col grid-cols-2 p-10 m-20">
            <form className="flex flex-col justify-center p-6" onSubmit={handleSubmit}>
                <label htmlFor="nomeCompleto"> Nome Completo </label>
                <input 
                    type="text" 
                    id="nomeCompleto" 
                    placeholder="coloque seu nome aqui..." 
                    className="border rounded-md border-color-primary" 
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="telefone"> Telefone </label>
                <input 
                    type="tel" 
                    id="telefone" 
                    placeholder="(00)00000-0000" 
                    pattern="([0-9]{2})[0-9]{5}-[0-9]{4}" 
                    className="border rounded-md border-color-primary" 
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="email"> E-mail </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="example@email.com" 
                    className="border rounded-md border-color-primary" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="cepHospital"> Cep do Hospital </label>
                <input 
                    type="number" 
                    id="cepHospital" 
                    placeholder="00000-000" 
                    className="border rounded-md border-color-primary" 
                    value={formData.cepHospital}
                    onChange={handleChange}
                    required
                />
                
                <label htmlFor="cargo"> Cargo </label>
                <input 
                    type="text" 
                    id="cargo" 
                    placeholder="Ex.: Investidor" 
                    className="border rounded-md border-color-primary" 
                    value={formData.cargo}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="nivelTecnico"> Nível de conhecimento técnico: </label>
                <div id="nivelTecnico" className="flex flex-col gap-2">
                    <div>
                        <input 
                            type="checkbox" 
                            id="possuiConhecimentoTecnico1"
                            checked={formData.possuiConhecimentoTecnico1}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="possuiConhecimentoTecnico1"> Possuo conhecimento técnico</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="possuiConhecimentoTecnico2"
                            checked={formData.possuiConhecimentoTecnico2}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="possuiConhecimentoTecnico2"> Possuo conhecimento técnico</label>
                    </div>
                </div>
                
                <button type="submit" className="border bg-black text-slate-50 py-2 px-5"> Calcular </button>
            </form>
            <Image src="/image-cadastro.png" alt="Imagem de cadastro" width={400} height={600} />
        </div>
    );
}
