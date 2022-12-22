import { Credit } from "../../entities/Credit";
import { ICreditConfiRepository } from "../../repositories/ICreditConfigRepository";
import { addMonths, parseISO } from 'date-fns' 
import { ICreditRepository } from "../../repositories/ICreditRepository";

interface CreditDTO{
    user_id:string
    credit_config_id:string
    category_id:string
    description:string
    data_compra:string
    parcelas:number
    value: number
}

export class CreateCredit
{
    constructor(
        private creditConfigRepository:ICreditConfiRepository,
        private creditRepository:ICreditRepository
    ){}

    async execute(request:CreditDTO){
        
        const installment_value = request.value / request.parcelas
        let data_compra = parseISO(request.data_compra)

        const creditConfig = await this.creditConfigRepository.findByID(request.credit_config_id)

        for(let i = 0; i < request.parcelas; i++ ){
            
            let date_due = data_compra
           
            if(data_compra.getDate() > creditConfig.day_credit_closing) {
                date_due = addMonths(data_compra, i + 1)
            }

            if(data_compra.getDate() < creditConfig.day_credit_closing){
                date_due = addMonths(data_compra, i)
            }
        
            const credit = new Credit({
                user_id: request.user_id,
                category_id:request.category_id,
                description:request.description,
                dt_due: date_due,
                installment_value:installment_value
            })

            await this.creditRepository.save(credit)
        }
    }

}