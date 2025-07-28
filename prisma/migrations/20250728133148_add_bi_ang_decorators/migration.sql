/*
  Warnings:

  - You are about to alter the column `birthAt` on the `users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `bi` VARCHAR(45) NULL,
    MODIFY `birthAt` DATETIME NULL;

-- CreateIndex
CREATE INDEX `Index_Id` ON `users`(`id`);
