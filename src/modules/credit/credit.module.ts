import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreditController } from "./credit.controller";
import { CreditRepository } from "./credit.repository";
import { Credit } from "./entity/credit.entity";



@Module({
    imports:[
       TypeOrmModule.forFeature([Credit])
    ],
    controllers:[
        CreditController
    ],
    providers:[
        CreditRepository
    ]
})
export class CreditModule{}