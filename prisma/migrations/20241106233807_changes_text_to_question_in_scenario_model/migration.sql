/*
  Warnings:

  - You are about to drop the column `text` on the `Scenario` table. All the data in the column will be lost.
  - Added the required column `question` to the `Scenario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scenario" DROP COLUMN "text",
ADD COLUMN     "question" TEXT NOT NULL;
