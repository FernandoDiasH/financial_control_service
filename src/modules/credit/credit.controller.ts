import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { formatISO, parseISO, setDate } from "date-fns";
import { CreditRepository } from "./credit.repository";
import { CreateCreditDTO, FindCreditsDTO, PayCreditDto } from "./dtos/creditDTO";
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
    async create(@Body() req: CreateCreditDTO) {
        return await this.generateCreditInstallments.execute(req) 
    }

    @Get('find-all/:userId')
    async findAll(@Param() req) {
    
        let credits = await this.creditRepository.repository.find({
            relations:{
                category:true,
                creditConfig:true
            },
            where:{
                id_user:req.userId
            }
        })
        return credits
        
        // return CreditViewModel.toHTTP({ credits, categories, creditConfig })
    }

    @Post('months')
    async getAllDistinctMonths(@Body() req) {
        // return await this.findDistinctMoths.execute(req.user_id)
    }

    @Post('pay')
    async payCredits(@Body() req: PayCreditDto) {
        console.log(req);
        
       return await this.payCredit.execute(req.user_id, req.credit_id)
    }
}