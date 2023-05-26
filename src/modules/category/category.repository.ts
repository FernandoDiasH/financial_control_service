import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "src/database/typeorm/base.repositroy";
import { Repository } from "typeorm";
import { Category } from "./entity/category.entity";

@Injectable()
export class CategoryRepository extends BaseRepository<Category>{

    constructor(
        @InjectRepository(Category) model: Repository<Category>
    ){
        super( model )
    }
}