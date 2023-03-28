import { CreateCredit } from "@app/services/Credit/CreateCredit";
import { FindCredits } from "@app/services/Credit/findCredits";
import { FindDistincstMonts } from "@app/services/Credit/findDistinctsMouth";
import { PayCredit } from "@app/services/Credit/PayCredit";
import { Body, Controller, Post } from "@nestjs/common";
import { parseISO } from "date-fns";
import { CreateCreditDTO, FindCreditsDTO } from "../DTOs/creditDTO";
import { CreditViewModel } from "../view-models/credit-view-model";


@Controller('credit')
export class CreditController {
    constructor(
        private createCredit: CreateCredit,
        private findCredits: FindCredits,
        private findDistinctMoths: FindDistincstMonts,
        private payCredit: PayCredit
    ) { }

    @Post()
    async create(@Body() req: CreateCreditDTO) {
        let { user_id, category_id, credit_config_id, data_compra, description, parcelas, value } = req

        let credit = await this.createCredit.execute({
            user_id,
            category_id,
            credit_config_id,
            data_compra,
            description,
            parcelas,
            value
        })
        return credit
    }

    @Post('find-all')
    async findAll(@Body() req: FindCreditsDTO) {

        let { user_id, end_dt, start_dt } = req

        let { credits, categories, creditConfig } = await this.findCredits.execute({
            user_id,
            end_dt: parseISO(end_dt),
            start_dt: parseISO(start_dt)
        })

        return CreditViewModel.toHTTP({ credits, categories, creditConfig })
    }

    @Post('months')
    async getAllDistinctMonths(@Body() req) {

        return await this.findDistinctMoths.execute(req.user_id)
    }

    @Post('pay')
    async payCredits(@Body() req) {
        this.payCredit.execute(req.credit_id)
    }
}