import { CreateCategory } from "@app/services/Category/CreateCategory";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateCategoryDTO } from "../DTOs/createCategoryDTO";

@Controller('/category')
export class  CategoryController {

    constructor(
        private createCategory:CreateCategory
    ){}



    @Post()
    async create(@Body() req: CreateCategoryDTO) {

        const { user_id, description, type } = req;
        this.createCategory.execute({
            user_id,
            description,
            type
        })


        // return res.status(200).json(CategoryViewModel.toHTTP(category));
    }
}