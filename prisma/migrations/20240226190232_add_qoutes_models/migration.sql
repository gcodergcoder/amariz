/*
  Warnings:

  - Added the required column `agentProviderId` to the `Qoutes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Qoutes" ADD COLUMN     "agentProviderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Qoutes" ADD CONSTRAINT "Qoutes_agentProviderId_fkey" FOREIGN KEY ("agentProviderId") REFERENCES "AgentProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
