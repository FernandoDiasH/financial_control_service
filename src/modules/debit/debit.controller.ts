import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
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
        return await this.debitRepository.saveEntity([debit])
    }

    @Get('/all/:userId')
    async findAllDebits(@Param() req) {

        let debits = await this.debitRepository.findManyByUserId(req.userId)

        return debits.map(debit => {
            return {
                id: debit.id,
                description: debit.description,
                data: debit.dt_purchase,
                valor: debit.value
            }
        })
    }

    @Put()
    async update(){

    }
}