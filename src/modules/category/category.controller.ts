import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateCategoryDTO } from "./dtos/categoryDTO";
import { CategoryRepository } from "./category.repository";
import { randomUUID } from "node:crypto";

@Controller('/category')
export class CategoryController {

    constructor(
        private readonly categoryRepository:CategoryRepository
    ){}

    @Post()
    async create(@Body() req: CreateCategoryDTO) {
    
        let category = this.categoryRepository.createEntity({ id_user: req.user_id, ...req})  
        return await this.categoryRepository.saveEntity([category])

    }

    @Get('find/:userId')
    async findAllCategory(@Param() param) {

        let categories = await this.categoryRepository.findManyByUserId(param.userId)

        return categories.map(category => {
            return {
                id: category.id,
                description: category.description,
                type: category.type
            }
        })
    }
}