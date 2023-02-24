import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaCategoryRepository } from "./prisma/repositories/prismaCategoryRepository";

@Module({
    providers: [
      PrismaService,
      {
        provide: CategoryAbstractRepository ,
        useClass: PrismaCategoryRepository ,
      },
    ],
    exports: [CategoryAbstractRepository],
  })
  export class DatabaseModule {}