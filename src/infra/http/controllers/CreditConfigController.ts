import {Request, Response} from 'express'
import { createCreditConfig } from '../../../app/useCases/CreditConfig'
import { CreditConfigViewModel } from '../view-models/credit-config-view-model'

export class CreditConfigController
{
    static async create(req:Request, res:Response){
        const { user_id, limit_credit, description, day_credit_closing, day_due } = req.body

        const creditConfig = await createCreditConfig.execute({  
            user_id: user_id ,
            limit_credit: limit_credit ,
            description: description,
            day_credit_closing: day_credit_closing,
            day_due: day_due 
        })
        
        return res.status(200).json(CreditConfigViewModel.toHTTP(creditConfig))
    }
}

