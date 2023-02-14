import { Credit } from "@app/entities/Credit";
import { CreditConfig } from "@app/entities/CreditConfig";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";
import { CreateCreditDTO } from "@infra/http/DTOs/createCreditDTO";
import { addMonths, parseISO } from "date-fns";

export class CreateCredit {
    private creditConfig: CreditConfig;
    private date_purchase: Date;

    constructor(
        private creditConfigRepository: CreditConfigAbstractRepository,
        private creditRepository: CreditAbstractRepository
    ) {}

    async execute(request: CreateCreditDTO) {
        this.date_purchase = parseISO(request.data_compra);

        this.creditConfig = await this.creditConfigRepository.findById(
            request.credit_config_id
        );

        await this.verifyCreditLimit(request.value);

        this.genereateCreditis(request);
    }

    private async verifyCreditLimit(value: number): Promise<void> {
        const sumValuesRegistered =
            await this.creditRepository.countValueCredits(
                this.creditConfig.user_id,
                this.creditConfig.id
            );

        const totalLimit =
            sumValuesRegistered + value < this.creditConfig.limit_credit;

        if (!totalLimit) {
            throw new Error('limite de credito estourado');
        }
    }

    private genereateCreditis(request: CreateCreditDTO) {
        const installment_value = request.value / request.parcelas;
        const promisses = [];

        for (let i = 0; i < request.parcelas; i++) {
            const date_due = this.calculateDateDue(i);

            const credit = new Credit({
                user_id: request.user_id,
                category_id: request.category_id,
                description: request.description,
                dt_due: date_due,
                installment_value: installment_value,
                credit_config_id: request.credit_config_id,
            });

            promisses.push(this.creditRepository.save(credit));
        }

        Promise.all(promisses);
    }

    private calculateDateDue(installments: number): Date {
        if (
            this.date_purchase.getDate() > this.creditConfig.day_credit_closing
        ) {
            return addMonths(this.date_purchase, installments + 1);
        }

        if (
            this.date_purchase.getDate() < this.creditConfig.day_credit_closing
        ) {
            return addMonths(this.date_purchase, installments);
        }

        throw new Error('Error calculate date due');
    }
}
