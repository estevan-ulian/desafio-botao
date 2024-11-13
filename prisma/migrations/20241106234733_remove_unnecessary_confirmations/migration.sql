/*
  Warnings:

  - You are about to drop the column `confirmation_image` on the `Scenario` table. All the data in the column will be lost.
  - You are about to drop the column `confirmation_url` on the `Scenario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Scenario" DROP COLUMN "confirmation_image",
DROP COLUMN "confirmation_url",
ADD COLUMN     "confirmation_content" TEXT;
