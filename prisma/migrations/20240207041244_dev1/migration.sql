/*
  Warnings:

  - Added the required column `aa` to the `AgentProvider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AgentProvider" ADD COLUMN     "aa" TEXT NOT NULL;
