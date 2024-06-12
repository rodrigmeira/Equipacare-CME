interface DadosMockInstrumentosTecidos {
    cirurgias: {
        numeroPorDiaInstr?: number;    //  Número salas cirúrgicas * Número cirurgias/sala/dia
        numeroPorDiaTec?: number;     //   Número salas cirúrgicas * Número cirurgias/sala/dia

        volumePorCirurgiaInstr: number;
        volumePorCirurgiaTec: number;

        volumeTotalDiarioInstr?: number;   // Volume por Cirurgia * Número de Cirurgias por Dia
        volumeTotalDiarioTec?: number;    //   Volume por Cirurgia * Número de Cirurgias por Dia
    };
    uti: {
        numeroLeitosInstr?: number;    
        numeroLeitosTec?: number;    

        volumePorLeitoPorDiaInstr: number;
        volumePorLeitoPorDiaTec: number;

        volumeTotalDiarioInstr?: number;     // Volume por Leito de UTI por dia * Número de Leitos de UTI
        volumeTotalDiarioTec?: number;      //   Volume por Leito de UTI por dia * Número de Leitos de UTI
    };
    internacoes: {
        numeroLeitosInstr?: number;  
        numeroLeitosTec?: number; 

        volumePorLeitoPorDiaInstr: number;
        volumePorLeitoPorDiaTec: number;

        volumeTotalDiarioInstr?: number;   // Volume por Leito de Internação por dia * Número de Leitos de Internação, RPA
        volumeTotalDiarioTec?: number;    // Volume por Leito de Internação por dia * Número de Leitos de Internação, RPA
     };

    materiais?: {
         estimativaVolumeTotalDiariInstr?: number;     // Volume Total Diário Internação + Volume Total Diário UTIs + Volume Total Diário Cirurgias  
         estimativaVolumeTotalDiarioTec?: number;      //  Volume Total Diário Internação + Volume Total Diário UTIs + Volume Total Diário Cirurgias  
    };
    totalVolumeDiario?: {
        estimativaVolumeTotalDiarioUE?: number  //     estimativaVolumeTotalDiariInstr + estimativaVolumeTotalDiarioTec
        estimativaVolumeTotalDiarioLitros?: number, //  estimativaVolumeTotalDiarioUE * 54
    };
}

const mockDados:DadosMockInstrumentosTecidos  = { 
    cirurgias: {
        volumePorCirurgiaInstr: 1.5,
        volumePorCirurgiaTec: 1.5
    },
    uti: {
        volumePorLeitoPorDiaInstr: 0.5,
        volumePorLeitoPorDiaTec: 0.5
    },
    internacoes: {
        volumePorLeitoPorDiaInstr: 0.1,
        volumePorLeitoPorDiaTec: 0.1
    }
};