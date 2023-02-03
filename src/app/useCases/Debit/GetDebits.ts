import { IDebitRepository } from "@app/repositories/IDebitRepository";
import { parseISO } from "date-fns";
import { GetDebitsDTO } from "src/infra/DTOs/GetDebitsDTO";


export class GetDebits {
    constructor(
        private debitRepository: IDebitRepository
    ){}

    async execute(request:GetDebitsDTO){    
        let {user_id, start_dt, end_dt} = request 

        const debits = await this.debitRepository.getAll(user_id, start_dt, end_dt)
        return debits

    }

}