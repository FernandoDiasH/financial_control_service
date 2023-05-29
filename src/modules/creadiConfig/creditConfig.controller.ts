import { Body, Controller, Get, Injectable, Param, Post } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateCreditConfigDTO } from "./dtos/CreditConfigDTO";
import { CreditConfigRepository } from "./creditConfig.repository";



@Controller('credit-config')
export class CreditConfigController {

    constructor(
        private readonly creditConfigRepository:CreditConfigRepository
    ) { }

    @Post()
    async createCreditConfig(@Body() req: CreateCreditConfigDTO) {
    
        let creditConfig = this.creditConfigRepository.createEntity({id: randomUUID(), userId:req.user_id,  ...req})

        return await this.creditConfigRepository.saveEntity([creditConfig])
    }

    @Get('find-all/:userId')
    async FindAllCreditConfig(@Param() req) {
        let creditConfigs = await this.creditConfigRepository.findManyByUserId(req.userId)

        return creditConfigs.map(creditConfig => {
            return {
                id: creditConfig.id,
                user_id: creditConfig.userId,
                descricao: creditConfig.description,
                vencimento: creditConfig.day_due,
                fechamento: creditConfig.day_credit_closing,
                limit: creditConfig.limit_credit
            }
        })
    }
}