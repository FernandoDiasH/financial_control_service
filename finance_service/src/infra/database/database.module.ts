import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaCategoryRepository } from "./prisma/repositories/prismaCategoryRepository";
import { PrismaCreditConfigRepository } from "./prisma/repositories/prismaCreditConfigRepository";
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
    },
    {
      provide: CreditConfigAbstractRepository,
      useClass: PrismaCreditConfigRepository
    }
  ],
  exports: [
    CategoryAbstractRepository,
    DebitAbstractRepository,
    CreditConfigAbstractRepository
  ],
})
export class DatabaseModule { }