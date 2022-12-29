import { Request, Response } from "express"
import { createCredit, findcredits } from "../../../app/useCases/Credit"
import {parseISO} from 'date-fns'
import { CreditViewModel } from "../view-models/credit-view-model"


export class CreditController
{
    static async create(req:Request, res:Response){
        const { user_id, category_id, credit_config_id, data_compra, description, parcelas, value } = req.body

        const credit = await createCredit.execute({  
             user_id:user_id,
             category_id:category_id,
             credit_config_id:credit_config_id,
             data_compra:data_compra,
             description:description,
             parcelas:parcelas,
             value:value
        })
        
        return res.status(200).json(credit)
    }

    static async findCredits(req:Request, res:Response){
        const {user_id, ...data} = req.body
        let start_dt = parseISO(data.start_dt)
        let end_dt = parseISO(data.end_dt)


        const credits = await findcredits.execute({user_id, start_dt, end_dt})
        
        return res.status(200).json(credits.map(credit => CreditViewModel.toHTTP(credit)))
    }
}
