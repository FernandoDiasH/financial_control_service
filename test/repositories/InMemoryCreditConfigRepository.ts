import { CreditConfig } from "../../src/app/entities/CreditConfig"
import { ICreditConfiRepository } from "../../src/app/repositories/ICreditConfigRepository"

export class InMemoryCreditConfigRepository implements ICreditConfiRepository
{

    public creditConfigs:CreditConfig[] = []

    async create(data: CreditConfig): Promise<void> {
        this.creditConfigs.push(data) 
    }

    async findByID(creditID: string): Promise<CreditConfig> {
        const creditConifg = this.creditConfigs.find(credit =>  credit.id == creditID )

        if(!creditConifg){
            throw new Error('Nenhuma configuracao de credito foi encontrada')
        }

        return creditConifg
    }
    
}