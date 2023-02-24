-- CreateTable
CREATE TABLE `CreditConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `limit_credit` FLOAT NOT NULL,
    `day_due` VARCHAR(255) NOT NULL,
    `credit_closing` VARCHAR(2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Credit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `installment_value` FLOAT NOT NULL,
    `dt_due` VARCHAR(255) NOT NULL,
    `credit_status` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Debit` (
    `id_cd` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `value` DOUBLE NOT NULL,
    `dt_purchase` VARCHAR(255) NOT NULL,
    `debit_type` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Credit` ADD CONSTRAINT `Credit_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Debit` ADD CONSTRAINT `Debit_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
