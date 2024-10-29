/*
  Warnings:

  - You are about to drop the column `isNotClicable` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `questionId` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `confirmationText` on the `questions` table. All the data in the column will be lost.
  - Added the required column `is_not_clicable` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question_id` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmation_text` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_questionId_fkey";

-- AlterTable
ALTER TABLE "answers" DROP COLUMN "isNotClicable",
DROP COLUMN "questionId",
ADD COLUMN     "is_not_clicable" BOOLEAN NOT NULL,
ADD COLUMN     "question_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "confirmationText",
ADD COLUMN     "confirmation_text" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
