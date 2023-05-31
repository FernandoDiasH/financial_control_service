import { Body, Controller, Get, Injectable, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateCreditConfigDto, GetCreditConfigDto, UpdateCreditConfigDto } from "./dtos/CreditConfigDTO";
import { CreditConfigRepository } from "./creditConfig.repository";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Credit Config')
@Controller('credit-config')
export class CreditConfigController {

    constructor(
        private readonly creditConfigRepository:CreditConfigRepository
    ) { }

    @Post()
    async createCreditConfig(@Body() req: CreateCreditConfigDto) {
    
        let creditConfig = this.creditConfigRepository.createEntity({id_user:req.user_id,  ...req})
        return await this.creditConfigRepository.saveEntity([creditConfig])
    }

    @Put()
    async update(@Body() req: UpdateCreditConfigDto){


        let creditConfig = await this.creditConfigRepository.repository.findOneBy({id: req.id})

        if(!creditConfig){
            throw new NotFoundException('Credit Config not found')
        }

        Object.assign(creditConfig, req)

        return await this.creditConfigRepository.repository.save(creditConfig)
    }

    @Get(':id')
    async get(@Param() req:GetCreditConfigDto) {
        let creditConfigs = await this.creditConfigRepository.repository.findOneBy({id:req.id})
        return creditConfigs
    }
}