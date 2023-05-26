import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DebitController } from "./debit.controller";
import { DebitRepository } from "./debit.repository";
import { Debit } from "./entity/debit.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Debit])
    ],
    controllers:[
        DebitController
    ],
    providers:[
        DebitRepository
    ]
})
export class DebitModule{

}