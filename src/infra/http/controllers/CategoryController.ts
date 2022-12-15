import {Request, Response} from 'express'
import { createCategoryUseCase } from '../../../app/useCases/Category'
import { CategoryViewModel } from '../view-models/category-view-model'

export class CategoryController
{
    static async create(req:Request, res:Response){
        const {id, user_id, description } = req.body

        const category = await createCategoryUseCase.execute({id, user_id, description})
        
        return res.send().json(
            CategoryViewModel.toHTTP(category)
        )
    }
}
