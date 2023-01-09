import { Credit } from '../../src/app/entities/Credit';
import { ICreditRepository } from '../../src/app/repositories/ICreditRepository';

export class InMemoryCreditRepository implements ICreditRepository {
    public credits: Credit[] = [];

    async save(data: Credit): Promise<void> {
        this.credits.push(data);
    }

    async countValueCredits(
        user_id: string,
        credit_config_id: string
    ): Promise<number> {
        const initialvalue = 0;
        const value = this.credits.reduce((acc, credit) => {
            if (
                credit.user_id === user_id &&
                credit.credit_config_id === credit_config_id
            ) {
                acc + credit.installment_value;
                return acc;
            }

            return acc;
        }, initialvalue);

        return value;
    }

    async update(credit: Credit): Promise<void> {
        const result = this.credits.findIndex((data) => credit.id == data.id);

        this.credits[result] = credit;
    }

    async findByCreditID(credit_id: string): Promise<Credit> {
        const credit = this.credits.find((credit) => credit.id == credit_id);

        if (credit) {
            return credit;
        }

        throw new Error();
    }
    async findCreditsByUserIdAndMonth(
        user_id: string,
        start_dt: Date,
        end_dt: Date
    ): Promise<Credit[]> {
        const credit = this.credits.filter((credit) => {
            if (
                credit.user_id == user_id &&
                start_dt < credit.dt_due &&
                end_dt > credit.dt_due
            ) {
                return credit;
            }
        });

        if (credit) {
            return credit;
        }

        throw new Error();
    }

    async findDistinctMounts(user_id: string): Promise<Date[]> {
        const dates = this.credits.map((credit) => credit.dt_due);

        if (dates) {
            return dates;
        }

        throw new Error();
    }
}
