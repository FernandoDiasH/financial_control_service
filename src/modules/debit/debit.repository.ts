import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/database/typeorm/base.repositroy";
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