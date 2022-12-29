import { Credit } from "../../entities/Credit";
import { ICreditConfiRepository } from "../../repositories/ICreditConfigRepository";
import { addMonths, parseISO } from 'date-fns' 
import { ICreditRepository } from "../../repositories/ICreditRepository";
import { CreditDTO } from "../../../infra/DTOs/CreditDTO";
import { CreditConfig } from "../../entities/CreditConfig";

export class CreateCredit
{
    constructor(
        private creditConfigRepository:ICreditConfiRepository,
        private creditRepository:ICreditRepository
    ){}

    async execute(request:CreditDTO){
       
        const installment_value = request.value / request.parcelas
        let data_compra = parseISO(request.data_compra)
        let promisses = []

        const creditConfig = await this.creditConfigRepository.findByID(request.credit_config_id)

        if(!creditConfig){
            throw new Error('not found credit config')
        }
        
        let verifyLimit =  await this.verifyCreditLimit(creditConfig, request.value)
        
        if(verifyLimit){
            throw new Error('limite de credito estourado') 
        }
        
        for(let i = 0; i < request.parcelas; i++ ){
            
            let date_due = this.calculateDateDue(data_compra, creditConfig.day_credit_closing, i )
           
            const credit = new Credit({
                user_id: request.user_id,
                category_id:request.category_id,
                description:request.description,
                dt_due: date_due,
                installment_value:installment_value,
                credit_config_id:request.credit_config_id
            })

            promisses.push(this.creditRepository.save(credit))
        }
        Promise.all(promisses)
    }

    private calculateDateDue(date_purchase:Date, day_credit_closing:number, installments:number ):Date{
        if(date_purchase.getDate() > day_credit_closing) {
            return addMonths(date_purchase, installments + 1)
        }

        if(date_purchase.getDate() < day_credit_closing){
            return  addMonths(date_purchase, installments)
        }

        throw new Error()
    }

    private async verifyCreditLimit(creditConfig:CreditConfig, value:number):Promise<boolean> {
        let sumValue = await this.creditRepository.countValueCredits(creditConfig.user_id, creditConfig.id)
  
        if(!sumValue && sumValue != 0){
            return true
        }        

        let totalLimit = (sumValue + value) < creditConfig.limit_credit
        
        if(totalLimit){
            return false
        }

        return true
    }
}