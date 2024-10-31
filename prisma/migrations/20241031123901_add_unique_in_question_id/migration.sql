/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `questions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "questions_id_key" ON "questions"("id");
