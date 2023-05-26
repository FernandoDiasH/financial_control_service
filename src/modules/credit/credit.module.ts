import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreditConfigRepository } from "../creadiConfig/creditConfig.repository";
import { CreditConfig } from "../creadiConfig/entity/creditConfig.entity";
import { CreditController } from "./credit.controller";
import { CreditRepository } from "./credit.repository";
import { Credit } from "./entity/credit.entity";
import { GenerateCreditInstallments } from "./services/generateCreditInstallments";
import { PayCredit } from "./services/PayCredit";



@Module({
    imports:[
       TypeOrmModule.forFeature([Credit, CreditConfig])
    ],
    controllers:[
        CreditController
    ],
    providers:[
        GenerateCreditInstallments,
        CreditRepository,
        CreditConfigRepository,
        PayCredit
    ]
})
export class CreditModule{}