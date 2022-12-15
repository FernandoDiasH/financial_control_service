import {Request, Response} from 'express'
import { createCategoryUseCase } from '../../../app/useCases/Category'
import { createCreditConfig } from '../../../app/useCases/CreditConfig'
import { CreditConfigViewModel } from '../view-models/credit-config-view-model'

class CreditConfigController
{
    async create(req:Request, res:Response){
        const {id, user_id, limit_credit, description, day_credit_closing, day_due } = req.body

        const category = await createCreditConfig.execute({
            id: id ,
            user_id: user_id ,
            limit_credit: limit_credit ,
            description: description,
            day_credit_closing: day_credit_closing,
            day_due: day_due 
        })
        
        return res.send().json(CreditConfigViewModel.toHTTP(category))
    }
}

export default new CreditConfigController()