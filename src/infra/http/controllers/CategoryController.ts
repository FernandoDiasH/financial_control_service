import { Request, Response } from 'express';
import { createCategoryUseCase } from '../../../app/useCases/Category';
import { CategoryViewModel } from '../view-models/category-view-model';

export class CategoryController {
    static async create(req: Request, res: Response) {
        const { user_id, description } = req.body;

        const category = await createCategoryUseCase.execute({
            user_id,
            description,
        });

        return res.status(200).json(CategoryViewModel.toHTTP(category));
    }
}
