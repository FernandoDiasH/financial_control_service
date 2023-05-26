import { BaseRepository } from "@infra/database/typeorm/base.repositroy";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Debit } from "./entity/debit.entity";

@Injectable()
export class DebitRepository extends BaseRepository<Debit>{

    constructor(
        @InjectRepository(Debit) model: Repository<Debit>
    ){
        super( model )
    }
}