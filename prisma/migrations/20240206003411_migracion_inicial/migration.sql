-- CreateTable
CREATE TABLE "Providers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "addredd" TEXT NOT NULL,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentProvider" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,

    CONSTRAINT "AgentProvider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AgentProvider_email_key" ON "AgentProvider"("email");

-- AddForeignKey
ALTER TABLE "AgentProvider" ADD CONSTRAINT "AgentProvider_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
