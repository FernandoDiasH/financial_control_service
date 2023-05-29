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

        let { id_category, id_credit_config, id_user, description, creditInstallments, totalValue } = this.req
        
        let installmentAmount = totalValue / creditInstallments
        
        await this.verifyCreditLimit(this.req.totalValue)
        
        let creditsEntries = []
        
        for(let partialAmount = 0; partialAmount < creditInstallments; partialAmount++){
            let creditInstallment = this.creditRepository.createEntity({
                id_user: id_user,
                id_category: id_category,
                id_credit_config: id_credit_config,
                description:description,
                installment_value: installmentAmount,
                dt_due: this.calculateDateDue(partialAmount)
            })

            creditsEntries.push(creditInstallment)
        }

        return await this.creditRepository.saveEntity(creditsEntries)
    }

    private async verifyCreditLimit(value: number): Promise<void> {

        this.creditConfig = await this.creditConfigRepository.findOneByUserId(this.req.id_credit_config, this.req.id_user)
        const sumValuesRegistered = await this.creditRepository.sumCreditValues(this.req.id_user, this.req.id_credit_config)

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
