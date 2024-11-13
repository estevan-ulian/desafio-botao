/*
  Warnings:

  - You are about to drop the column `confirmation_content` on the `Scenario` table. All the data in the column will be lost.
  - Added the required column `confirmation_url` to the `Scenario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scenario" DROP COLUMN "confirmation_content",
ADD COLUMN     "confirmation_url" TEXT NOT NULL;
