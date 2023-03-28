import { CreditConfig } from "@app/entities/CreditConfig";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";
import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { CreateCreditConfigDTO } from "../DTOs/CreditConfigDTO";



@Injectable()
@Controller('credit-config')
export class CreditConfigController {

    constructor(
        private creditConfigRepository: CreditConfigAbstractRepository
    ) { }

    @Post()
    async createCredit(@Body() req: CreateCreditConfigDTO) {
        let { user_id, day_credit_closing, day_due, description, limit_credit } = req

        let creditConfig = new CreditConfig({
            user_id,
            description,
            day_credit_closing,
            day_due,
            limit_credit
        })

        this.creditConfigRepository.create(creditConfig)
    }

    @Post('find-all')
    async FindAllCreditConfig(@Body() req) {
        let user_id = req.user_id
        let creditConfigs = await this.creditConfigRepository.findManyByUserId(user_id)

        return creditConfigs.map(creditConfig => {
            return {
                id: creditConfig.id,
                user_id: creditConfig.user_id,
                descricao: creditConfig.description,
                vencimento: creditConfig.day_due,
                fechamento: creditConfig.day_credit_closing,
                limit: creditConfig.limit_credit
            }
        })
    }
}