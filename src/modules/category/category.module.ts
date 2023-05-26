import { Module } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { connectionDatabaseConfig } from '@infra/database/typeorm/connection.confg'
import { CategoryController } from "./category.controller";
import { Category } from "./entity/category.entity";
import { CategoryRepository } from "./category.repository";

@Module({
    imports:[
        TypeOrmModule.forFeature([Category])
    ],
    controllers:[
        CategoryController
    ],
    providers:[
        CategoryRepository
    ],
})
export class CategoryModule{}
