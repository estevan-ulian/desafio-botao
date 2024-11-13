/*
  Warnings:

  - You are about to drop the `answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_question_id_fkey";

-- DropTable
DROP TABLE "answers";

-- DropTable
DROP TABLE "questions";

-- CreateTable
CREATE TABLE "Scenario" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "confirmation_type" TEXT NOT NULL,
    "confirmation_content" TEXT NOT NULL,
    "confirmation_image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Scenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "scenario_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scenario_id_key" ON "Scenario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_id_key" ON "Answer"("id");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_scenario_id_fkey" FOREIGN KEY ("scenario_id") REFERENCES "Scenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
