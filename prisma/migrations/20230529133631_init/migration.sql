-- CreateTable
CREATE TABLE `CreditConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` TEXT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `limit_credit` FLOAT NOT NULL,
    `day_due` INTEGER NOT NULL,
    `day_credit_closing` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Credit` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` TEXT NOT NULL,
    `id_category` INTEGER NOT NULL,
    `id_credit_config` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `installment_value` FLOAT NOT NULL,
    `dt_due` DATETIME NOT NULL,
    `credit_status` TIMESTAMP NULL,

    INDEX `Credit_category_id_fkey`(`id_category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` TEXT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `type_category` ENUM('Entrada', 'Saida') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Debit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` TEXT NOT NULL,
    `id_category` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `value` DOUBLE NOT NULL,
    `dt_purchase` DATETIME NOT NULL,

    INDEX `Debit_category_id_fkey`(`id_category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Credit` ADD CONSTRAINT `Credit_id_credit_config_fkey` FOREIGN KEY (`id_credit_config`) REFERENCES `CreditConfig`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Credit` ADD CONSTRAINT `Credit_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Debit` ADD CONSTRAINT `Debit_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
