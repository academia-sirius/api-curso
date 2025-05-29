

> https://pt.scribd.com/document/610314721/Nest-Cheatsheet
> https://www.youtube.com/watch?v=8_X0nSrzrCw
> https://marketplace.visualstudio.com/items?itemName=ashinzekene.nestjs

> rm -rf src/user

> git push --set-upstream origin feature-crud-nestjs
> npm i  class-validator class-transformer @nestjs/mapped-types

#### add validator dto on main/bootstrap
> npm i class-validator class-transformer

##### para usar o partialtype(DTO)
> npm i  @nestjs/mapped-types
> npm i --save @nestjs/mapped-types

##### instalar o orm (prisma ou typeorm)
> npm i -D prisma
> npx prisma init





##### build database for testing

CREATE TABLE `apinest`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(127) NOT NULL,
  `password` VARCHAR(127) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`));


  > npx prisma generate
  > npx prisma db pull


# caso quiser fazer invertido ou seja criar model e gerar tabela ex: baixo

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}

> [ npx prisma migrate dev --name init ]
> npx prisma migrate reset (apaga tudo)
> npx prisma migrate dev --name AddBirthDates
> npx prisma generate


