-- CreateTable
CREATE TABLE "Qoutes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "Qoutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QoutesDetails" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "unit" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quotesId" TEXT NOT NULL,

    CONSTRAINT "QoutesDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Qoutes" ADD CONSTRAINT "Qoutes_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QoutesDetails" ADD CONSTRAINT "QoutesDetails_quotesId_fkey" FOREIGN KEY ("quotesId") REFERENCES "Qoutes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
