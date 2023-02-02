/*
  Warnings:

  - You are about to alter the column `credit_status` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `dt_due` on the `Credit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `Debit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_cd` on the `Debit` table. All the data in the column will be lost.
  - The required column `id` was added to the `Debit` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Credit` MODIFY `credit_status` TIMESTAMP NULL,
    MODIFY `dt_due` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `Debit` DROP PRIMARY KEY,
    DROP COLUMN `id_cd`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
