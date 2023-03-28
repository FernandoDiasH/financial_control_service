import { FindCreditsDTO } from '../../../infra/DTOs/FindCreditDTO';
import { Category } from '../../entities/Category';
import { Credit } from '../../entities/Credit';
import { CreditConfig } from '../../entities/CreditConfig';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';
import { ICreditConfiRepository } from '../../repositories/ICreditConfigRepository';
import { ICreditRepository } from '../../repositories/ICreditRepository';

export class FindCredits {
    private credits: Credit[] = [];
    private creditConfig: CreditConfig[];
    private category: Category[] = [];

    constructor(
        private creditReposytory: ICreditRepository,
        private categoryRepository: ICategoryRepository,
        private creditConfigRepository: ICreditConfiRepository
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

        const creditConfig = this.creditConfigRepository.findAllByUserID(user_id);
        const categories = this.categoryRepository.findAllByUserID(user_id);

        return {
            credits: await credits,
            creditConfig: await creditConfig,
            categories: await categories,
        };
    }
}
