import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { GetDebits } from "@app/services/Debit/GetDebits";
import { Body, Controller, Post } from "@nestjs/common";
import { parseISO, setDate } from "date-fns";
import { CreteDebitDTO, GetDebitsDTO } from "../DTOs/DebitDTO";

@Controller('/debit')
export class DebitController {

    constructor(
        private getDebits: GetDebits,
        private debitRepository: DebitAbstractRepository
    ) { }

    @Post()
    async create(@Body() req: CreteDebitDTO) {
        let { user_id, category_id, description, dt_purchase, value } = req

        let debit = new Debit({
            user_id,
            category_id,
            description,
            dt_purchase: parseISO(dt_purchase),
            value
        })

        await this.debitRepository.create(debit)

    }

    @Post('find')
    async findAllDebits(@Body() req: GetDebitsDTO) {
        let { user_id, start_dt, end_dt } = req

        let debits = await this.getDebits.execute({ 
            user_id, 
            start_dt: (start_dt) ?  parseISO(start_dt): setDate(new Date(), 1),
            end_dt: (end_dt) ?  parseISO(end_dt):  setDate(new Date(), 31) ,
        })

        return debits.map(debit => {
            return {
                id: debit.id,
                description: debit.description,
                data: debit.dt_purchase,
                valor: debit.value
            }
        })
    }
}