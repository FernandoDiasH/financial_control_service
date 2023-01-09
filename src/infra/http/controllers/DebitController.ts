import { Request, Response } from 'express';
import { createDebit } from '../../../app/useCases/Debit';

export class DebitController {
    static async create(req: Request, res: Response) {
        const {
            user_id,
            category_id,
            description,
            value,
            debit_type,
            dt_purchase,
        } = req.body;

        const debit = await createDebit.execute({
            user_id: user_id,
            category_id: category_id,
            description: description,
            value: value,
            debit_type: debit_type,
            dt_purchase: dt_purchase,
        });

        return res.status(200).json(debit);
    }
}
