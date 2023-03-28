import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaCategoryRepository } from "./prisma/repositories/prismaCategoryRepository";
import { PrismaDebitRepository } from "./prisma/repositories/prismaDebitRepository";

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoryAbstractRepository,
      useClass: PrismaCategoryRepository,
    },
    {
      provide: DebitAbstractRepository,
      useClass: PrismaDebitRepository
    }
  ],
  exports: [
    CategoryAbstractRepository,
    DebitAbstractRepository
  ],
})
export class DatabaseModule { }