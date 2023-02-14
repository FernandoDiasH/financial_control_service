import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { DebitDTO } from "@infra/http/DTOs/DebitDTO";
import { parseISO } from "date-fns";

export class CreateDebit {
    constructor(private debitRepository: DebitAbstractRepository) {}

    async execute(request: DebitDTO) {
        const debit = new Debit({
            user_id: request.user_id,
            category_id: request.category_id,
            debit_type: request.debit_type,
            description: request.description,
            dt_purchase: parseISO(request.dt_purchase),
            value: request.value,
        });

        this.debitRepository.create(debit);

        return debit;
    }
}
