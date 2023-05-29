import { CreditConfig } from "@app/entities/CreditConfig"
import { makeCreditConfig } from "@test/factories/CreditConfig"
import { PrismaCreditconfigMapper } from "./prismaCreditConfigMapper"


describe('Prisma credit config mapper ', ()=>{

    it('Deveria trazer os dados corretos para o prisma', ()=>{
        let primsaCreditConfig = PrismaCreditconfigMapper.toPrisma(makeCreditConfig())

        expect(primsaCreditConfig).toHaveProperty('id')
        expect(primsaCreditConfig).toHaveProperty('user_id')
        expect(primsaCreditConfig).toHaveProperty('limit_credit')
        expect(primsaCreditConfig).toHaveProperty('description')
        expect(primsaCreditConfig).toHaveProperty('day_due')
        expect(primsaCreditConfig).toHaveProperty('day_credit_closing')
    })

    it('Deveria trazer os dados correto para o dominio', ()=>{
        let creditConfig = PrismaCreditconfigMapper.toDomain({
            id:1,
            id_user:'usuario-teste',
            description:'teste',
            limit_credit:3000,
            day_due:16,
            day_credit_closing:12
        })

        expect(creditConfig).toBeInstanceOf(CreditConfig)
    })

})