import { Category } from "@app/entities/Category";
import { Credit } from "@app/entities/Credit";
import { CreditConfig } from "@app/entities/CreditConfig";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";
import { FindCreditsDTO } from "@infra/http/DTOs/FindCreditDTO";

export class FindCredits {
    private credits: Credit[] = [];
    private creditConfig: CreditConfig[];
    private category: Category[] = [];

    constructor(
        private creditReposytory: CreditAbstractRepository,
        private categoryRepository: CategoryAbstractRepository,
        private creditConfigRepository: CreditConfigAbstractRepository
    ) {}

    async execute(request: FindCreditsDTO) {
        const { user_id, end_dt, start_dt } = request;
        const credits = this.creditReposytory.findCreditsByUserIdAndMonth(
            user_id,
            start_dt,
            end_dt
        );

        if (!this.credits) {
            throw new Error('Not Found');
        }

        const creditConfig = this.creditConfigRepository.findManyByUserId(user_id);
        const categories = this.categoryRepository.findManyByUserId(user_id);

        return {
            credits: await credits,
            creditConfig: await creditConfig,
            categories: await categories,
        };
    }
}
