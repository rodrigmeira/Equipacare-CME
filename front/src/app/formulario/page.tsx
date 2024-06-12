"use client"

export default function CadastroPage() {
    return (
        <div className="border p-5 flex flex-col justify-center items-center">
            <form className="flex flex-col gap-3">
                <label htmlFor="nomeCompleto"> Nome Completo </label>
                <input type="text" id="nomeCompleto" placeholder="coloque seu nome aqui..." className="border" required/>
                
                <label htmlFor="telefone"> Telefone </label>
                <input type="tel" id="telefone" placeholder="(00)00000-0000" pattern="([0-9]{2})[0-9]{5}-[0-9]{4}" className="border" required/>
                
                <label htmlFor="email"> E-mail </label>
                <input type="email" id="email" placeholder="example@email.com" className="border" required/>
                
                <label htmlFor="cep-do-hospital"> Cep do Hospital </label>
                <input type="number" id="cepHospital" placeholder="00000-000" className="border" required/>
                
                <label htmlFor="Cargo"> Cargo </label>
                <input type="text" id="cargo" placeholder="Ex.: Investidor" className="border" required/>

                <label htmlFor="nivelTecnico"> Nivel de onhecimento técnico: </label>
                <div id="nivelTecnico" className="flex flex-col gap-2">
                    <input type="checkbox" required/><label> Possuo conhecimento técnico</label>
                    <input type="checkbox" required/><label> Possuo conhecimento técnico</label>
                </div>
                <button type="submit" className="border bg-black text-slate-50 py-2 px-5"> Calcular </button>
            </form>
            <img src="image-formulario" alt="ERROR" />
        </div>
    )
}