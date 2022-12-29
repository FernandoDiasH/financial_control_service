import { Credit } from "../../src/app/entities/Credit"
import { ICreditRepository } from "../../src/app/repositories/ICreditRepository"

export class InMemoryCreditRepository implements ICreditRepository
{
    
    public credits:Credit[] = []

    async save(data: Credit): Promise<void> {
        this.credits.push(data) 
    }

    async countValueCredits(user_id: string, credit_config_id: string): Promise<number | null> {
        let initialvalue = 0
        let value = this.credits.reduce((acc, credit) =>{

            if(credit.user_id === user_id && credit.credit_config_id === credit_config_id){
                acc + credit.installment_value
                return acc
            }

            return acc 
        }, initialvalue )

        return value
    }
    
}