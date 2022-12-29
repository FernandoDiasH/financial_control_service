import { parseISO } from "date-fns";
import { describe, it } from "vitest";
import { prisma } from "../src/infra/database/prisma/prisma";
import { PrismaCreditRepository } from "../src/infra/database/prisma/repositories/PrismaCreditRepository";

describe('area de teste', ()=>{
    it('testando quary do prisma', async ()=>{
        
        let creditRepository = new PrismaCreditRepository()
        let credits = await creditRepository.findCreditsByUserIdAndMonth(
            '85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0',
            parseISO('2022-11-19'),
            parseISO('2022-12-11'),
        )
    })

    it('testando quary do prisma', async ()=>{
        
        let creditRepository = new PrismaCreditRepository()
        let dates = await creditRepository.findDistinctMounts(
            '85535c53-d2f4-4fe7-8ac9-6cb2b0a722c0',
        )
    })
})