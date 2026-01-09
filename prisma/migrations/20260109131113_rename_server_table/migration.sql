/*
  Warnings:

  - You are about to drop the `Server` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Server" DROP CONSTRAINT "Server_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "channel" DROP CONSTRAINT "channel_server_id_fkey";

-- DropForeignKey
ALTER TABLE "server_member" DROP CONSTRAINT "server_member_server_id_fkey";

-- DropTable
DROP TABLE "Server";

-- CreateTable
CREATE TABLE "server" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "server_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "server_title_owner_id_idx" ON "server"("title", "owner_id");

-- AddForeignKey
ALTER TABLE "server" ADD CONSTRAINT "server_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "server_member" ADD CONSTRAINT "server_member_server_id_fkey" FOREIGN KEY ("server_id") REFERENCES "server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_server_id_fkey" FOREIGN KEY ("server_id") REFERENCES "server"("id") ON DELETE CASCADE ON UPDATE CASCADE;
