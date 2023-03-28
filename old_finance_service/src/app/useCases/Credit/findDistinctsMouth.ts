import { ICreditRepository } from '../../repositories/ICreditRepository';

export class FindDistincstMonts {
    constructor(private creditRepositry: ICreditRepository) {}

    async execute(user_id: string): Promise<Date[]> {
        const creditConfig = await this.creditRepositry.findDistinctMounts(
            user_id
        );

        return creditConfig;
    }
}
