/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "gender" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cartype" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "lisence_plate" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "rides" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "driver_id" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "user_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "payed" BOOLEAN NOT NULL,
    "done" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Drivers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
