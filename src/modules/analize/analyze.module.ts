import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepository } from "../category/category.repository";
import { Category } from "../category/entity/category.entity";
import { CreditConfig } from "../creadiConfig/entity/creditConfig.entity";
import { CreditRepository } from "../credit/credit.repository";
import { Credit } from "../credit/entity/credit.entity";
import { DebitRepository } from "../debit/debit.repository";
import { Debit } from "../debit/entity/debit.entity";
import { AnalyzeController } from "./analyze.controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([Debit, Credit, CreditConfig, Category])
    ],
    controllers:[
        AnalyzeController
    ],
    providers:[
        DebitRepository,
        CreditRepository,
        CategoryRepository
    ],
})
export class analyzeModule{}