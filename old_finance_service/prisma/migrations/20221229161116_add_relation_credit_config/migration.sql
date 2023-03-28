/*
  Warnings:

  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `credit_config_id` to the `Credit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Credit` ADD COLUMN `credit_config_id` VARCHAR(191) NOT NULL,
    MODIFY `credit_status` TIMESTAMP NULL,
    MODIFY `dt_due` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `Credit` ADD CONSTRAINT `Credit_credit_config_id_fkey` FOREIGN KEY (`credit_config_id`) REFERENCES `CreditConfig`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
