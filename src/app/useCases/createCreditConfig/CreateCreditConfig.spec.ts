import { randomUUID } from "crypto";
import { describe, expect, it } from "vitest";
import { InMemoryCreditConfigRepository } from "../../../../test/repositories/InMemoryCreditConfigRepository";
import { CreditConfig } from "../../entities/CreditConfig";
import { CreateCreditConfigUseCase } from "./CreateCreditConfigUseCase";


describe('Credit Config', ()=>{
    it('deveria poder criar um configuracao de credito', async ()=>{

        const creditConfigReposytpory = new InMemoryCreditConfigRepository()
        const createCreditConfig = new CreateCreditConfigUseCase(creditConfigReposytpory)

        const creeditConfig = await createCreditConfig.execute({
            id:randomUUID(),
            user_id:randomUUID(),
            day_due:"18",
            day_credit_closing:"11",
            description:"configuracao de cartao de credito",
            limit_credit:1600,
        })

        expect(creditConfigReposytpory.creditConfigs).toHaveLength(1)
        expect(creditConfigReposytpory.creditConfigs[0]).toEqual(creeditConfig)
    })
})