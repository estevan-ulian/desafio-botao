/*
  Warnings:

  - Added the required column `is_not_clickable` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "is_not_clickable" BOOLEAN NOT NULL;
