/*
  Warnings:

  - A unique constraint covering the columns `[screenId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movieId]` on the table `Screening` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[screeningId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Screening_screenId_key" ON "Screening"("screenId");

-- CreateIndex
CREATE UNIQUE INDEX "Screening_movieId_key" ON "Screening"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_customerId_key" ON "Ticket"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_screeningId_key" ON "Ticket"("screeningId");
