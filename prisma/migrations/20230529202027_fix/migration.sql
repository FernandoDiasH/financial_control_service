/*
  Warnings:

  - The primary key for the `Credit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `dt_purchase` on the `Debit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Credit` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `dt_due` DATETIME NOT NULL,
    MODIFY `credit_status` TIMESTAMP NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Debit` MODIFY `dt_purchase` DATETIME NOT NULL;
