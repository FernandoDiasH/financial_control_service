import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/database/typeorm/base.repositroy";
import { IsNull, Repository } from "typeorm";
import { Credit } from "./entity/credit.entity";

@Injectable()
export class CreditRepository extends BaseRepository<Credit>{

    constructor(
        @InjectRepository(Credit) model: Repository<Credit>
    ){
        super( model )
    }

    sumCreditValues(userId:string, creditConfigId:number){
        return this.repository.sum("installment_value", {id_user: userId, id_credit_config: creditConfigId, credit_status: IsNull()})
    }

}