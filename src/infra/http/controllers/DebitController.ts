import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { createDebit, getDebits } from '../../../app/useCases/Debit';

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

    static async getAllDebtis(req: Request, res: Response){
        const {user_id, ...data } = req.body
        let start_dt = parseISO(data.start_dt)
        let end_dt = parseISO(data.end_dt)

        const debits = await getDebits.execute({user_id, start_dt, end_dt })
        return res.status(200).json(debits);
    }
}
