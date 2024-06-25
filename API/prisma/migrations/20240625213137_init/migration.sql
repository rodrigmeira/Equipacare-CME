-- CreateTable
CREATE TABLE `Marcas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Marcas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Autoclaves` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `marcaId` INTEGER NOT NULL,
    `volumeTotalDaCamaraLitros` INTEGER NOT NULL,
    `volumeUtilDaCamaraLitros` INTEGER NOT NULL,
    `tempoTotalMedioDoCicloInclindoSecagemMin` INTEGER NOT NULL,
    `tempoDeCargaEDescargaMin` INTEGER NOT NULL,
    `tempoParaTesteDiarioDeBDMin` INTEGER NOT NULL,
    `tempoParaProcedimentoDiarioDeAquecimentoMin` INTEGER NOT NULL,

    UNIQUE INDEX `Autoclaves_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LavadorasTermo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `marcaId` INTEGER NOT NULL,
    `volumeTotalCamaraLitros` INTEGER NOT NULL,
    `capacidadeDeCargaDeBandejasDeInstrumentos` INTEGER NOT NULL,
    `capacidadeDeCargaTraqueias` INTEGER NOT NULL,
    `tempoMedioCicloInstrumentosComCargaMaximaMin` INTEGER NOT NULL,
    `tempoMedioCicloAssistenciaVentilatoriaComCargaMaximaMin` INTEGER NOT NULL,
    `numerodeBandejasPorUE` INTEGER NOT NULL,
    `tempoMedioCicloInstrumentosComCargaMaxima` INTEGER NOT NULL,
    `interveloMedioEntreCiclosMIn` INTEGER NOT NULL,
    `quantidadeDeTraqueiasPorCirurgia` INTEGER NOT NULL,
    `quantidadeTraqueiasPorLeitoUTIDia` INTEGER NOT NULL,
    `tempoMedioCicloAssistenciaVentilatoriaComCargaMaxMin` INTEGER NOT NULL,
    `intervaloMedioEntreCiclosMin` INTEGER NOT NULL,

    UNIQUE INDEX `LavadorasTermo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Autoclaves` ADD CONSTRAINT `Autoclaves_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `Marcas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LavadorasTermo` ADD CONSTRAINT `LavadorasTermo_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `Marcas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
