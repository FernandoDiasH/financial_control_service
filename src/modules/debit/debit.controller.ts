import { Body, Controller, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CreteDebitDTO, UpdateDebitDto } from "./dtos/DebitDTO";
import { DebitRepository } from "./debit.repository";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Debit')
@Controller('/debit')
export class DebitController {

    constructor(
        // private getDebits: GetDebits,
        private debitRepository: DebitRepository
    ) { }

    @Post()
    async create(@Body() req: CreteDebitDTO) {
        let debit = this.debitRepository.createEntity({ id_user: req.user_id, ...req})
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
    async update(@Body() req: UpdateDebitDto){

        let debit = await this.debitRepository.repository.findOneBy({id:req.id})
        
        if(!debit){
            throw new NotFoundException("Debit not found.")
        }

        Object.assign(debit, req)

        return await this.debitRepository.repository.save(debit)
    }
}