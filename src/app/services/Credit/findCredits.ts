import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";
import { FindCreditsPropsDTO } from "@infra/http/DTOs/creditDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindCredits {

    constructor(
        private creditRepository: CreditAbstractRepository,
        private categoryRepository: CategoryAbstractRepository,
        private creditConfigRepository: CreditConfigAbstractRepository
    ) { }

    async execute(request: FindCreditsPropsDTO) {
        let { user_id, end_dt, start_dt } = request;
        
        console.log(start_dt, end_dt);
        

        let credits = this.creditRepository.findCreditsByUserIdAndMonth(
            user_id,
            start_dt,
            end_dt
        );


        const creditConfig = this.creditConfigRepository.findManyByUserId(user_id);
        const categories = this.categoryRepository.findManyByUserId(user_id);

        return {
            credits: await credits,
            creditConfig: await creditConfig,
            categories: await categories,
        };
    }
}
