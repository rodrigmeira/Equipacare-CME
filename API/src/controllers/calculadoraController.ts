import { modelosA } from '../mock/modelos_A';
import { modelosC } from '../mock/modelos_C';
import { modelosF } from '../mock/modelos_F';
import { modelosE } from '../mock/modelos_E';
import { modelosD } from '../mock/modelos_D';
import { modelosB } from '../mock/modelos_B';

import { Request, Response } from 'express';
import { Caracteristicas, Modelo } from '../mock/Autoclaves_a_vapor';
import { DadosMockInstrumentosTecidos } from '../mock/Dados';


const calcularModelo = (modelo: Modelo) => {
  const numeroDeAutoclaves = modelo.numeroDeAutoclaves ?? 0;

  modelo.tempoDoCicloConsiderandoCargaEDescargaMin = modelo.tempoTotalMedioDoCicloInclindoSecagemMin + modelo.tempoDeCargaEDescargaMin;

  const horasTrabalhoDiario = 24;
  modelo.tempoDisponivelDiarioMin = (horasTrabalhoDiario * 60) - (modelo.tempoParaTesteDiarioDeBDMin + modelo.tempoParaProcedimentoDiarioDeAquecimentoMin);

  modelo.producaoDoHospitalVolumeDiarioLitros = 14089;

  modelo.volumeProcessadoNoIntervaloDePicoLitros = modelo.producaoDoHospitalVolumeDiarioLitros * 0.9;

  modelo.intervaloDiarioDePicoMin = (horasTrabalhoDiario * 60) - (modelo.tempoParaTesteDiarioDeBDMin + modelo.tempoParaProcedimentoDiarioDeAquecimentoMin);

  modelo.numeroMaximoDeCiclosPorDia = modelo.tempoDisponivelDiarioMin / modelo.tempoDoCicloConsiderandoCargaEDescargaMin;

  modelo.numeroMaximoDeCiclosDuranteIntervaloDePico = modelo.intervaloDiarioDePicoMin / modelo.tempoDoCicloConsiderandoCargaEDescargaMin;

  modelo.percentualAproveitamentoCamara = (modelo.volumeUtilDaCamaraLitros / modelo.volumeTotalDaCamaraLitros) * 100;

  modelo.numeroDeAutoclavesEmManutencao = numeroDeAutoclaves - 1;

  modelo.capacidadeProcessamentoIntervaloDePico = numeroDeAutoclaves * modelo.numeroMaximoDeCiclosDuranteIntervaloDePico * modelo.volumeUtilDaCamaraLitros;

  modelo.horasNecessariasParaAtenderVolumeTotalCasoUmaAltoClaveEstejaEmManutencao = ((((modelo.volumeProcessadoNoIntervaloDePicoLitros / modelo.volumeUtilDaCamaraLitros) * modelo.tempoDoCicloConsiderandoCargaEDescargaMin) + modelo.tempoParaTesteDiarioDeBDMin + modelo.tempoParaProcedimentoDiarioDeAquecimentoMin) / 60) / modelo.numeroDeAutoclavesEmManutencao;

  modelo.percentualUtilizacaoCapacidadeNoPico = (modelo.volumeProcessadoNoIntervaloDePicoLitros / modelo.capacidadeProcessamentoIntervaloDePico) * 100;

  return modelo;
};

const calcularDadosMock = (dados: DadosMockInstrumentosTecidos) => {

  dados.cirurgias.numeroPorDiaInstr = dados.cirurgias.numeroPorDiaInstr; 
  dados.cirurgias.numeroPorDiaTec = dados.cirurgias.numeroPorDiaTec;  
  dados.cirurgias.volumeTotalDiarioInstr = dados.cirurgias.volumePorCirurgiaInstr * dados.cirurgias.numeroPorDiaInstr; 
  dados.cirurgias.volumeTotalDiarioTec = dados.cirurgias.volumePorCirurgiaTec * dados.cirurgias.numeroPorDiaTec;

  dados.uti.volumeTotalDiarioInstr = dados.uti.volumePorLeitoPorDiaInstr * dados.uti.numeroLeitosInstr; 
  dados.uti.volumeTotalDiarioTec = dados.uti.volumePorLeitoPorDiaTec * dados.uti.numeroLeitosTec;

  dados.internacoes.volumeTotalDiarioInstr = dados.internacoes.volumePorLeitoPorDiaInstr * dados.internacoes.numeroLeitosInstr;
  dados.internacoes.volumeTotalDiarioTec = dados.internacoes.volumePorLeitoPorDiaTec * dados.internacoes.numeroLeitosTec;

  dados.materiais.estimativaVolumeTotalDiarioInstr = dados.cirurgias.volumeTotalDiarioInstr + dados.uti.volumeTotalDiarioInstr + dados.internacoes.volumeTotalDiarioInstr;
  dados.materiais.estimativaVolumeTotalDiarioTec = dados.cirurgias.volumeTotalDiarioTec + dados.uti.volumeTotalDiarioTec + dados.internacoes.volumeTotalDiarioTec;

  dados.totalVolumeDiario.estimativaVolumeTotalDiarioUE = dados.materiais.estimativaVolumeTotalDiarioInstr + dados.materiais.estimativaVolumeTotalDiarioTec;
  dados.totalVolumeDiario.estimativaVolumeTotalDiarioLitros = dados.totalVolumeDiario.estimativaVolumeTotalDiarioUE * 54;

  return dados;
};

export const calcular = (req: Request, res: Response) => {
  const todosModelos: Modelo[] = [...modelosA, ...modelosB, ...modelosC, ...modelosD, ...modelosE, ...modelosF];

  const caracteristicas: Caracteristicas = {
    CaracteristicasGerais: "MARCA",
    modelos: todosModelos.map(calcularModelo),
  };

  res.json(caracteristicas);
};

export const calcularDados = (req: Request, res: Response) => {
  const dados: DadosMockInstrumentosTecidos = req.body;

  const resultados = calcularDadosMock(dados);

  res.json(resultados);
};
