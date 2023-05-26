import { CreditController } from "@infra/http/controllers/credit.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreditConfigController } from "./creditConfig.controller";
import { CreditConfigRepository } from "./creditConfig.repository";
import { CreditConfig } from "./entity/creditConfig.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([CreditConfig])
    ],
    controllers:[
        CreditConfigController
    ],
    providers:[
        CreditConfigRepository
    ]
})
export class CreditConfigModule{}