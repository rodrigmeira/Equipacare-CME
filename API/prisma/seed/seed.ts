import { PrismaClient } from "@prisma/client";
import {
  modelosA,
  modelosB,
  modelosC,
  modelosD,
  modelosE,
  modelosF,
} from "../../src/mock";
import { marcas } from "../../src/mock/marcas";

const prisma = new PrismaClient();

async function main() {
  console.log("DB seed");
  await seedAutoclaves();
}

async function seedMarcas() {
  for (let marca of marcas) {
    const record = await prisma.marcas.create({
      data: {
        name: marca.name,
      },
    });

    console.log("*** created marcas", record.id, record.name);
  }
}

async function seedAutoclaves() {
  const getAllModels = async () => {
    return [
      ...modelosA,
      ...modelosB,
      ...modelosC,
      ...modelosD,
      ...modelosE,
      ...modelosF,
    ];
  };

  const allModels = await getAllModels();

  for (let model of allModels) {
    const record = await prisma.autoclaves.create({
      data: {
        name: model.modelo,
        marcaId: model.marcaId,
        volumeTotalDaCamaraLitros: model.volumeTotalDaCamaraLitros,
        volumeUtilDaCamaraLitros: model.volumeUtilDaCamaraLitros,
        tempoTotalMedioDoCicloInclindoSecagemMin:
          model.tempoTotalMedioDoCicloInclindoSecagemMin,
        tempoDeCargaEDescargaMin: model.tempoDeCargaEDescargaMin,
        tempoParaTesteDiarioDeBDMin: model.tempoParaTesteDiarioDeBDMin,
        tempoParaProcedimentoDiarioDeAquecimentoMin:
          model.tempoParaProcedimentoDiarioDeAquecimentoMin,
      },
    });

    console.log("*** created autoclaves", record.id, record.name);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
