import { Request, Response } from "express"
import { createCredit } from "../../../app/useCases/Credit"


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
}
