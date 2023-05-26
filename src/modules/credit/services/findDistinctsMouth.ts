import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindDistincstMonts {
    constructor(private creditRepositry: CreditAbstractRepository) { }

    async execute(user_id: string): Promise<Date[]> {
        const creditConfig = await this.creditRepositry.findDistinctMounts(
            user_id
        );

        return creditConfig;
    }
}
