/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Credit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CreditConfig` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Debit` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Credit` DROP FOREIGN KEY `Credit_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `Debit` DROP FOREIGN KEY `Debit_category_id_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Credit` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` TEXT NOT NULL,
    MODIFY `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `CreditConfig` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Debit` DROP PRIMARY KEY,
    MODIFY `id_cd` VARCHAR(191) NOT NULL,
    MODIFY `user_id` TEXT NOT NULL,
    MODIFY `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_cd`);

-- AddForeignKey
ALTER TABLE `Credit` ADD CONSTRAINT `Credit_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Debit` ADD CONSTRAINT `Debit_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
