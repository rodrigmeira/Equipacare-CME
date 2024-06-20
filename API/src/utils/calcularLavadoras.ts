import { formatarPercentual } from "./formatarPercentual";

export const calcularLavadoras = ({
    EstimativaVolumeTotalDiarioMaterial,
    cirurgiasPorDia,
    NumeroleitosUTI,
    TotalDeLavadorasTermo,
    

    modelos,
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
        const NomeModeloLavadora = modelo.modelos;

        const ProducaoUEInstrumentosDia = EstimativaVolumeTotalDiarioMaterial
        const numeroCirurgiasDia = cirurgiasPorDia
        const numeroLeitosUTI = NumeroleitosUTI

        const BandejasPorUE = 2
        const CapacidadeProcessamentoUEInstrumentos = CapacidadeCargaBandejasDeInstrumentos / BandejasPorUE
        const QuantidadeDeCiclosNecessariosDiariamenteParaIntru = Math.ceil(ProducaoUEInstrumentosDia / CapacidadeProcessamentoUEInstrumentos)
        const IntervaloMedioEntreCiclos = 10
        const TempoNecessarioParaProcessarADemandaDeInstrumentosMin = QuantidadeDeCiclosNecessariosDiariamenteParaIntru  * (TempoMedioCicloAssistenciaVentilatoriaCargaMaximaMinuto + IntervaloMedioEntreCiclos)
        const QuantidadeTraqueiasPorCirurgia = 3
        const QuantidadeTraqueiasPorDiaCirurgia = numeroCirurgiasDia * QuantidadeTraqueiasPorCirurgia
        const QuantidadeTraqueiasPorLeitoUTIDia = 3
        const QuantidadeTraqueiasPorDiaUTI = numeroLeitosUTI * QuantidadeTraqueiasPorLeitoUTIDia
        const QuantidadeTraqueiasPorDiaTOTAL = QuantidadeTraqueiasPorDiaCirurgia + QuantidadeTraqueiasPorDiaUTI

        const QuantidadeCiclosNecessariosDiariamenteParaAssistVent = Math.ceil(QuantidadeTraqueiasPorDiaTOTAL / CapacidadeCargaDeTraqueias)
        const TempoNecessarioParaProcessarADemandaDeAssistenciaVentilatoriasMin = QuantidadeCiclosNecessariosDiariamenteParaAssistVent * (TempoMedioCicloInstrumentosCargaMaximaMinuto + IntervaloMedioEntreCiclos)

        const DemandaCiclosDia = Math.ceil(QuantidadeCiclosNecessariosDiariamenteParaAssistVent + QuantidadeDeCiclosNecessariosDiariamenteParaIntru)
        const DemandaCiclosMin = TempoNecessarioParaProcessarADemandaDeInstrumentosMin + TempoNecessarioParaProcessarADemandaDeAssistenciaVentilatoriasMin

        const MinutosDisponiveisDiariamenteSomandoEquipamentos = 60 * 24 * TotalDeLavadorasTermo
        const PercentualUtilizacaoCapacidadeMaxima = DemandaCiclosMin / MinutosDisponiveisDiariamenteSomandoEquipamentos * 100

        const PercentualFormatadoLavadora = formatarPercentual(PercentualUtilizacaoCapacidadeMaxima)

        return {
            NomeModeloLavadora,
            PercentualFormatadoLavadora,
        };
    });

    return resultadoLavadoras;
}