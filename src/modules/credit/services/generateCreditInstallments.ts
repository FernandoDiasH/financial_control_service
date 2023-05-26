import { ConflictException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { addMonths, parseISO } from "date-fns";
import { CreditConfigRepository } from "src/modules/creadiConfig/creditConfig.repository";
import { CreditConfig } from "src/modules/creadiConfig/entity/creditConfig.entity";
import { CreateCreditDTO } from "src/modules/credit/dtos/creditDTO";
import { CreditRepository } from "../credit.repository";

@Injectable()
export class GenerateCreditInstallments {
    private creditConfig: CreditConfig;
    private date_purchase: Date;

    private req: CreateCreditDTO

    constructor(
        private creditConfigRepository: CreditConfigRepository,
        private creditRepository: CreditRepository
    ) { }

    async execute(request: CreateCreditDTO ) {
        
        this.req = request
        this.date_purchase = parseISO(request.purchaseDate)

        let { user_id, category_id, credit_config_id, description, creditInstallments, totalValue } = this.req
        
        let installmentAmount = totalValue / creditInstallments
        
        await this.verifyCreditLimit(this.req.totalValue)
        
        let creditsEntries = []
        
        for(let partialAmount = 0; partialAmount < creditInstallments; partialAmount++){
            let creditInstallment = this.creditRepository.createEntity({
                id:randomUUID(),
                userId: user_id,
                category_id: category_id,
                credit_config_id: credit_config_id,
                description:description,
                installment_value: installmentAmount,
                dt_due: this.calculateDateDue(partialAmount)
            })

            creditsEntries.push(creditInstallment)
        }

        return await this.creditRepository.saveEntity(creditsEntries)
    }

    private async verifyCreditLimit(value: number): Promise<void> {

        this.creditConfig = await this.creditConfigRepository.findOneByUserId(this.req.credit_config_id, this.req.user_id)
        const sumValuesRegistered = await this.creditRepository.sumCreditValues(this.req.user_id, this.req.credit_config_id)

        const totalLimit = sumValuesRegistered + value > this.creditConfig.limit_credit;

        if (totalLimit) {
            throw new ConflictException('Credit limit exceeded');
        }
    }

    private calculateDateDue(partialAmount: number): Date {
        if (this.date_purchase.getDate() > this.creditConfig.day_credit_closing) {
            return addMonths(this.date_purchase, partialAmount + 1);
        }

        if (this.date_purchase.getDate() < this.creditConfig.day_credit_closing) {
            return addMonths(this.date_purchase, partialAmount);
        }

        throw new ConflictException('Error calculate date due');
    }
}
