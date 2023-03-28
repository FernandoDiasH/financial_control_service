import { Credit } from "@app/entities/Credit";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";

export class InMemoryCreditRepository implements CreditAbstractRepository {
    public credits: Credit[] = [];

    async countValueCredits(user_id: string, credit_config_id: string): Promise<number> {
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

    async findCreditsByUserIdAndMonth(user_id: string, start_dt: Date, end_dt: Date): Promise<Credit[]> {
        const credit = this.credits.filter((credit) => {
            if(credit.user_id == user_id && start_dt < credit.dt_due && end_dt > credit.dt_due){
                return credit
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

    async create(entitie: Credit): Promise<Credit> {
        this.credits.push(entitie);

        return entitie
    }

    async save(entitie: Credit): Promise<Credit> {
        const result = this.credits.findIndex((data) => entitie.id == data.id);

        this.credits[result] = entitie;
        return entitie
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entititeId: string): Promise<Credit> {
        const credit = this.credits.find((credit) => credit.id == entititeId);

        if (credit) {
            return credit;
        }

        throw new Error('credito nao encontrado');
    }

    async findManyByUserId(userId: string): Promise<[] | Credit[]> {

        const credits = this.credits.filter(credit => userId == credit.user_id)

        return credits;
    }
}
