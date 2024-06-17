export interface DadosMockInstrumentosTecidos {
    cirurgias: {
      numeroPorDiaInstr: number;
      numeroPorDiaTec: number;
      volumePorCirurgiaInstr: number;
      volumePorCirurgiaTec: number;
      volumeTotalDiarioInstr: number;
      volumeTotalDiarioTec: number;
    };
    uti: {
      numeroLeitosInstr: number;
      numeroLeitosTec: number;
      volumePorLeitoPorDiaInstr: number;
      volumePorLeitoPorDiaTec: number;
      volumeTotalDiarioInstr: number;
      volumeTotalDiarioTec: number;
    };
    internacoes: {
      numeroLeitosInstr: number;
      numeroLeitosTec: number;
      volumePorLeitoPorDiaInstr: number;
      volumePorLeitoPorDiaTec: number;
      volumeTotalDiarioInstr: number;
      volumeTotalDiarioTec: number;
    };
    materiais: {
      estimativaVolumeTotalDiarioInstr: number;
      estimativaVolumeTotalDiarioTec: number;
    };
    totalVolumeDiario: {
      estimativaVolumeTotalDiarioUE: number;
      estimativaVolumeTotalDiarioLitros: number;
    };
  }
  
  export const mockDados: DadosMockInstrumentosTecidos = {
    cirurgias: {
      numeroPorDiaInstr: 72,
      numeroPorDiaTec: 72,
      volumePorCirurgiaInstr: 1.5,
      volumePorCirurgiaTec: 1.5,
      volumeTotalDiarioInstr: 108,
      volumeTotalDiarioTec: 108,
    },
    uti: {
      numeroLeitosInstr: 30,
      numeroLeitosTec: 30,
      volumePorLeitoPorDiaInstr: 0.5,
      volumePorLeitoPorDiaTec: 0.5,
      volumeTotalDiarioInstr: 15,
      volumeTotalDiarioTec: 15,
    },
    internacoes: {
      numeroLeitosInstr: 149,
      numeroLeitosTec: 149,
      volumePorLeitoPorDiaInstr: 0.1,
      volumePorLeitoPorDiaTec: 0.1,
      volumeTotalDiarioInstr: 7.45,
      volumeTotalDiarioTec: 7.45,
    },
    materiais: {
      estimativaVolumeTotalDiarioInstr: 130.5,
      estimativaVolumeTotalDiarioTec: 130.5,
    },
    totalVolumeDiario: {
      estimativaVolumeTotalDiarioUE: 260.9,
      estimativaVolumeTotalDiarioLitros: 14089,
    },
  };
  