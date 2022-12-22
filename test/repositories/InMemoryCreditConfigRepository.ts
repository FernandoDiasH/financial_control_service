import { CreditConfig } from "../../src/app/entities/CreditConfig"
import { ICreditConfiRepository } from "../../src/app/repositories/ICreditConfigRepository"

export class InMemoryCreditConfigRepository implements ICreditConfiRepository
{

    public creditConfigs:CreditConfig[] = []

    async create(data: CreditConfig): Promise<void> {
        this.creditConfigs.push(data) 
    }

    async findByID(creditID: string): Promise<CreditConfig> {
        return this.creditConfigs.find(credit =>  credit.id == creditID )
    }
    
}