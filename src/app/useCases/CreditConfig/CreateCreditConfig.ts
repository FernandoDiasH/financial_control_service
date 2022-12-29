import { CreditConfigDTO } from "../../../infra/DTOs/CreditConfigDTO";
import { CreditConfig } from "../../entities/CreditConfig";
import { ICreditConfiRepository } from "../../repositories/ICreditConfigRepository";

type CreateCreditConfigResponse = CreditConfig 

export class CreateCreditConfig {

    constructor(
        private creditConfigRepositry: ICreditConfiRepository
    ){}
    
    async execute(request: CreditConfigDTO):Promise<CreateCreditConfigResponse>{
        const {user_id, limit_credit, description, day_due, day_credit_closing } = request

        const creditConfig = new CreditConfig({
            user_id,
            day_credit_closing,
            day_due,description,
            limit_credit
        })

        await this.creditConfigRepositry.create(creditConfig)
        return creditConfig
    }
}




