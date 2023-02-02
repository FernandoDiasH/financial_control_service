/*
  Warnings:

  - You are about to drop the column `credit_closing` on the `CreditConfig` table. All the data in the column will be lost.
  - You are about to alter the column `day_due` on the `CreditConfig` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(2)`.
  - Added the required column `day_credit_closing` to the `CreditConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CreditConfig` DROP COLUMN `credit_closing`,
    ADD COLUMN `day_credit_closing` VARCHAR(2) NOT NULL,
    MODIFY `day_due` VARCHAR(2) NOT NULL;
