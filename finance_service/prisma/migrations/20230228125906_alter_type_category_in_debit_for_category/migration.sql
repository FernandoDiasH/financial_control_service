/*
  Warnings:

  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `debit_type` on the `Debit` table. All the data in the column will be lost.
  - You are about to alter the column `dt_purchase` on the `Debit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `type_catgory` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `type_catgory` ENUM('Entrada', 'Saida') NOT NULL;

-- AlterTable
ALTER TABLE `Credit` MODIFY `credit_status` TIMESTAMP NULL,
    MODIFY `dt_due` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Debit` DROP COLUMN `debit_type`,
    MODIFY `dt_purchase` DATETIME NOT NULL;
