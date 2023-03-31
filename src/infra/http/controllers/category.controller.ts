import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreateCategory } from "@app/services/Category/CreateCategory";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCategoryDTO } from "../DTOs/categoryDTO";

@Controller('/category')
export class CategoryController {

    constructor(
        private createCategory: CreateCategory,
        private categoryRepository: CategoryAbstractRepository
    ) { }

    @Post()
    async create(@Body() req: CreateCategoryDTO) {

        const { user_id, description, type } = req;
        this.createCategory.execute({
            user_id,
            description,
            type
        })
    }

    @Get('find')
    async findAllCategory(@Body() req) {

        let categories = await this.categoryRepository.findManyByUserId(req.user_id)

        return categories.map(category => {
            return {
                id: category.id,
                description: category.description,
                type: category.type
            }
        })
    }
}