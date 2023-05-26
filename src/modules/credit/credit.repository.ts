import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/database/typeorm/base.repositroy";
import { Repository } from "typeorm";
import { Credit } from "./entity/credit.entity";

@Injectable()
export class CreditRepository extends BaseRepository<Credit>{

    constructor(
        @InjectRepository(Credit) model: Repository<Credit>
    ){
        super( model )
    }
}