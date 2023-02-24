/*
  Warnings:

  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.
  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Credit` MODIFY `dt_due` INTEGER NOT NULL,
    MODIFY `credit_status` TIMESTAMP NOT NULL;
