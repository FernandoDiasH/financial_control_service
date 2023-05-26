import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Body, Controller, Post } from "@nestjs/common";
import { randomUUID } from "crypto";
import { parseISO, setDate } from "date-fns";
import { CreteDebitDTO, GetDebitsDTO } from "./dtos/DebitDTO";
import { DebitRepository } from "./debit.repository";

@Controller('/debit')
export class DebitController {

    constructor(
        // private getDebits: GetDebits,
        private debitRepository: DebitRepository
    ) { }

    @Post()
    async create(@Body() req: CreteDebitDTO) {

        let debit = this.debitRepository.createEntity({id: randomUUID(), userId: req.user_id, ...req})
        await this.debitRepository.saveEntity(debit)
        
    }

    @Post('find')
    async findAllDebits(@Body() req: GetDebitsDTO) {
        // let { user_id, start_dt, end_dt } = req

        // let debits = await this.getDebits.execute({ 
        //     user_id, 
        //     start_dt: (start_dt) ?  parseISO(start_dt): setDate(new Date(), 1),
        //     end_dt: (end_dt) ?  parseISO(end_dt):  setDate(new Date(), 31) ,
        // })

        // return debits.map(debit => {
        //     return {
        //         id: debit.id,
        //         description: debit.description,
        //         data: debit.dt_purchase,
        //         valor: debit.value
        //     }
        // })
    }
}