import { formatarPercentual } from "./formatarPercentual";

export const calcularLavadoras = ({
    EstimativaVolumeTotalDiarioMaterial,
    VolumeDiarioDeMaterialLitros,
    cirurgiasPorDia,
    NumeroleitosUTI,
    TotalDeLavadorasTermo,
    
    marca,
    modelos,
    VolumeTotalCamaraLitros,
    CapacidadeCargaBandejasDeInstrumentos,
    CapacidadeCargaDeTraqueias,
    TempoMedioCicloInstrumentosCargaMaximaMinuto,
    TempoMedioCicloAssistenciaVentilatoriaCargaMaximaMinuto,
}: {
    EstimativaVolumeTotalDiarioMaterial: number;
    VolumeDiarioDeMaterialLitros: number;
    cirurgiasPorDia: number;
    NumeroleitosUTI: number;
    TotalDeLavadorasTermo: number;  
    
    marca: string;
    modelos: any[];
    VolumeTotalCamaraLitros: number;
    CapacidadeCargaBandejasDeInstrumentos: number;
    CapacidadeCargaDeTraqueias: number;
    TempoMedioCicloInstrumentosCargaMaximaMinuto: number;
    TempoMedioCicloAssistenciaVentilatoriaCargaMaximaMinuto: number;
}) => {
    const resultadoLavadoras = modelos.map((modelo) => {
        const NomeModelo = modelo.modelos;

        const ProducaoUEInstrumentosDia = EstimativaVolumeTotalDiarioMaterial
        const numeroCirurgiasDia = cirurgiasPorDia
        const numeroLeitosUTI = NumeroleitosUTI

        const BandejasPorUE = 2
        const CapacidadeProcessamentoUEInstrumentos = CapacidadeCargaBandejasDeInstrumentos / BandejasPorUE
        const QuantidadeDeCiclosNecessariosDiariamenteParaIntru = Math.ceil(ProducaoUEInstrumentosDia / CapacidadeProcessamentoUEInstrumentos)
        const IntervaloMedioEntreCiclos = 10
        const TempoNecessarioParaProcessarADemandaDeInstrumentosMin = NumeroCiclosNecessariosDiariamenteParaInstrumentos * (TempoMedioCicloAssistenciaVentilatoriaCargaMaximaMinuto + IntervaloMedioEntreCiclos)
        const QuantidadeTraqueiasPorCirurgia = 3
        const QuantidadeTraqueiasPorDiaCirurgia = numeroCirurgiasDia *
}