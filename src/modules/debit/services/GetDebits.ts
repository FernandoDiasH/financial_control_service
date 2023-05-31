import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository"
import { Injectable } from "@nestjs/common";
import { GetDebitsPropsDto } from "../dtos/DebitDTO";

@Injectable()
export class GetDebits {
    constructor(
        private debitRepository: DebitAbstractRepository
    ) { }

    async execute(request: GetDebitsPropsDto) {
        let { user_id, start_dt, end_dt } = request

        const debits = await this.debitRepository.getAll(user_id, start_dt, end_dt)
        return debits

    }

}