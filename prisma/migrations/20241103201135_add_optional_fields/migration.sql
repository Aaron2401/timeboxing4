/*
  Warnings:

  - You are about to alter the column `start_time` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `end_time` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `start_time` DATETIME(3) NULL,
    MODIFY `end_time` DATETIME(3) NULL,
    MODIFY `status` VARCHAR(191) NULL;
