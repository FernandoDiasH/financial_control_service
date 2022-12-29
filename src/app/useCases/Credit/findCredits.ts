import { FindCreditsDTO } from "../../../infra/DTOs/FindCreditDTO";
import { ICreditRepository } from "../../repositories/ICreditRepository";


export class FindCredits
{
    constructor(
        private creditReposytory:ICreditRepository
    ){}

    async execute(request:FindCreditsDTO){
        const {user_id, end_dt, start_dt} = request
        const credits = await this.creditReposytory.findCreditsByUserIdAndMonth(user_id, start_dt, end_dt)
        if(credits){
            return credits
        }

        throw new Error('Not Found')
    }
}