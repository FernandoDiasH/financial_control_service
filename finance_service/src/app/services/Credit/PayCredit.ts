import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";

export class PayCredit {
    constructor(private creditRepository: CreditAbstractRepository) {}

    async execute(credit_id: string) {
        const credit = await this.creditRepository.findById(credit_id);

        credit.pay();

        await this.creditRepository.save(credit);
    }
}
