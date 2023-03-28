/*
  Warnings:

  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dt_purchase` on the `Debit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Credit` MODIFY `credit_status` TIMESTAMP NULL,
    MODIFY `dt_due` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Debit` MODIFY `dt_purchase` DATETIME NOT NULL;
