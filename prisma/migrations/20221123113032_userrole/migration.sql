-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'LECTURER');

-- CreateTable
CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_key" ON "UserRole"("userId");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
