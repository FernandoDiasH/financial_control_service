import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import {Request, Response} from 'express'

export class CreateCategoryController
{
    constructor(
        private createCategoryUseCase:CreateCategoryUseCase
    ){}

    async handle(req:Request, res:Response){
        const {id, user_id, description } = req.body

        await this.createCategoryUseCase.execute({id, user_id, description})

    }
}