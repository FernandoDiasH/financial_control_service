import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { formatISO, parseISO, setDate } from "date-fns";
import { CreditRepository } from "./credit.repository";
import { CreateCreditDto, GetCreditDto, PayCreditDto } from "./dtos/creditDTO";
import { GenerateCreditInstallments } from "./services/generateCreditInstallments";
import { PayCredit } from "./services/PayCredit";

@ApiTags('Credit')
@Controller('credit')
export class CreditController {
    constructor(
        private generateCreditInstallments: GenerateCreditInstallments,
        private payCredit: PayCredit,
        private readonly creditRepository:CreditRepository
        // private findCredits: FindCredits,
        // private findDistinctMoths: FindDistincstMonts,
    ) { }

    @Post()
    async create(@Body() req: CreateCreditDto) {
        return await this.generateCreditInstallments.execute(req) 
    }

    @Get(':id')
    async findAll(@Param() req:GetCreditDto) {
    
        let [ credit ] = await this.creditRepository.repository.find({
            relations:{
                category:true,
                creditConfig:true
            },
            where:{
                id:Number(req.id)
            }
        })
        return credit
        
        // return CreditViewModel.toHTTP({ credits, categories, creditConfig })
    }

    @Put('pay/:id')
    async payCredits(@Param() req: PayCreditDto) {
        return await this.payCredit.execute(req.id)
    }

    // @Post('months')
    // async getAllDistinctMonths(@Body() req) {
    //     // return await this.findDistinctMoths.execute(req.user_id)
    // }

}