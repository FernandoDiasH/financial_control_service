import { Body, Controller, Post } from "@nestjs/common";
import { randomUUID } from "crypto";
import { formatISO, parseISO, setDate } from "date-fns";
import { CreditRepository } from "./credit.repository";
import { CreateCreditDTO, FindCreditsDTO, PayCreditDto } from "./dtos/creditDTO";
import { GenerateCreditInstallments } from "./services/generateCreditInstallments";
import { PayCredit } from "./services/PayCredit";


@Controller('credit')
export class CreditController {
    constructor(
        private generateCreditInstallments: GenerateCreditInstallments,
        private payCredit: PayCredit,
        // private findCredits: FindCredits,
        // private findDistinctMoths: FindDistincstMonts,
        private readonly creditRepository:CreditRepository
    ) { }

    @Post()
    async create(@Body() req: CreateCreditDTO) {
        return await this.generateCreditInstallments.execute(req) 
    }

    @Post('find-all')
    async findAll(@Body() req: FindCreditsDTO) {

        // let { user_id, end_dt, start_dt } = req

        // let { credits, categories, creditConfig } = await this.findCredits.execute({
        //     user_id,
        //     start_dt: (start_dt) ?  parseISO(start_dt): setDate(new Date(), 1),
        //     end_dt: (end_dt) ?  parseISO(end_dt):  setDate(new Date(), 31) ,
        // })

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