import { Body, Controller, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CreateCategoryDTO, GetCategoryDto, UpdateCategoryDto } from "./dtos/categoryDTO";
import { CategoryRepository } from "./category.repository";
import { randomUUID } from "node:crypto";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Category')
@Controller('/category')
export class CategoryController {

    constructor(
        private readonly categoryRepository:CategoryRepository
    ){}

    @Post()
    async create(@Body() req: CreateCategoryDTO) {
    
        let category = this.categoryRepository.createEntity({ id_user: req.id_user, ...req})  
        return await this.categoryRepository.saveEntity([category])

    }

    @Get('/:id')
    async findAllCategory(@Param() param:GetCategoryDto) {
        
        let category = await this.categoryRepository.repository.findOneBy({id: param.id})
        return category

        // return categories.map(category => {
        //     return {
        //         id: category.id,
        //         description: category.description,
        //         type: category.type
        //     }
        // })
    }

    @Put()
    async update(@Body() req: UpdateCategoryDto){
        let category = await this.categoryRepository.repository.findOneBy({id: Number(req.id)})

        if(!category){
            throw new NotFoundException('Category not found')
        }

        category.description = req.description
        category.type = req.type

        return await this.categoryRepository.repository.save(category)

    }   
}