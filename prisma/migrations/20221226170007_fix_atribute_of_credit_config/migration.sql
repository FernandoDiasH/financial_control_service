/*
  Warnings:

  - You are about to alter the column `day_due` on the `CreditConfig` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2)` to `Int`.
  - You are about to alter the column `day_credit_closing` on the `CreditConfig` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2)` to `Int`.

*/
-- AlterTable
ALTER TABLE `CreditConfig` MODIFY `day_due` INTEGER NOT NULL,
    MODIFY `day_credit_closing` INTEGER NOT NULL;
