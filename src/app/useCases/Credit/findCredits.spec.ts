import { parseISO } from "date-fns"
import { describe, expect, it } from "vitest"
import { makeCategory } from "../../../../test/factories/Category"
import { makeCreditConfig } from "../../../../test/factories/CreditConfig"
import { makeCredit } from "../../../../test/factories/CreditFactory"
import { InMemoryCategoryRepository } from "../../../../test/repositories/InMemoryCategoryRepository"
import { InMemoryCreditConfigRepository } from "../../../../test/repositories/InMemoryCreditConfigRepository"
import { InMemoryCreditRepository } from "../../../../test/repositories/InMemoryCreditRepository"
import { FindCredits } from "./findCredits"

describe('Find all Credit use case', ()=>{
    it('Deveria trazer todos os lancamentos de credito no intervalo informado', async  ()=>{

        const creditRepository = new InMemoryCreditRepository()
        const categoryRepository = new InMemoryCategoryRepository()
        const creditConfigRepository = new InMemoryCreditConfigRepository()

        
        creditConfigRepository.create(makeCreditConfig())
        categoryRepository.create(makeCategory())
        creditRepository.save(makeCredit({dt_due:parseISO('2022-10-06')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-10-10')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-10-12')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-11-12')}))

        const findCredit = new FindCredits(creditRepository, categoryRepository, creditConfigRepository )

        const credits = await findCredit.execute({
            user_id:'usuario-teste',
            start_dt:parseISO('2022-10-01'),
            end_dt: parseISO('2022-10-30')
        })

        expect(credits.credits).toHaveLength(3)
    })

    it('Deveria trazer um array vazio se nao houver lancamentos de credito no intervalo informado', async  ()=>{

        const creditRepository = new InMemoryCreditRepository()
        const categoryRepository = new InMemoryCategoryRepository()
        const creditConfigRepository = new InMemoryCreditConfigRepository()

        
        creditConfigRepository.create(makeCreditConfig())

        categoryRepository.create(makeCategory())

        creditRepository.save(makeCredit({dt_due:parseISO('2022-11-06')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-11-10')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-11-12')}))
        creditRepository.save(makeCredit({dt_due:parseISO('2022-11-12')}))

        const findCredit = new FindCredits(creditRepository, categoryRepository, creditConfigRepository )

        const credits = await findCredit.execute({
            user_id:'usuario-teste',
            start_dt:parseISO('2022-10-01'),
            end_dt: parseISO('2022-10-30')
        })

        expect(credits.credits).toHaveLength(0)
    })
})