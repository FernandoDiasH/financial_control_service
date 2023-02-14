import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository"
import { GetDebitsDTO } from "@infra/http/DTOs/GetDebitsDTO"

export class GetDebits {
    constructor(
        private debitRepository: DebitAbstractRepository
    ){}

    async execute(request:GetDebitsDTO){    
        let {user_id, start_dt, end_dt} = request 

        const debits = await this.debitRepository.getAll(user_id, start_dt, end_dt)
        return debits

    }

}