/*
  Warnings:

  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Changed the type of `dt_due` on the `Credit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `Credit` DROP COLUMN `dt_due`,
    ADD COLUMN `dt_due` DATETIME NOT NULL,
    MODIFY `credit_status` TIMESTAMP NULL;
