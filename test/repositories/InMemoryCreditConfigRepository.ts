import { CreditConfig } from "@app/entities/CreditConfig";
import { CreditConfigAbstractRepository } from "@app/repositories/creditConfigAbstractRepository";

export class InMemoryCreditConfigRepository implements CreditConfigAbstractRepository {
    public creditConfigs: CreditConfig[] = [];

    async create(entitie: CreditConfig): Promise<CreditConfig> {
       this.creditConfigs.push(entitie);
       return entitie;
    }
    
    async save(entitie: CreditConfig): Promise<CreditConfig> {
        throw new Error("Method not implemented.");
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(entititeId: string): Promise<CreditConfig> {
        const creditConifg = this.creditConfigs.find((credit) => credit.id == entititeId);

        if (!creditConifg) {
            throw new Error('Nenhuma configuracao de credito foi encontrada');
        }

        return creditConifg;
    }

    async findManyByUserId(userId: string): Promise<[] | CreditConfig[]> {
        const data = this.creditConfigs.filter(
            (config) => config.user_id == userId
        );

        if (data) {
            return data;
        }

        throw new Error();
    }
}
