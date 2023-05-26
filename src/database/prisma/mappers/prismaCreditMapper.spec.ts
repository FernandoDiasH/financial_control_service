import { Credit } from "@app/entities/Credit"
import { makeCredit } from "@test/factories/CreditFactory"
import { PrismaCreditMapper } from "./prismaCreditMapper"

describe('Prisma credit mapper ', ()=>{

    it('Deveria trazer os dados corretos para o prisma', ()=>{
        let primsaCreditConfig = PrismaCreditMapper.toPrisma(makeCredit())

        expect(primsaCreditConfig).toHaveProperty('id')
        expect(primsaCreditConfig).toHaveProperty('user_id')
        expect(primsaCreditConfig).toHaveProperty('category_id')
        expect(primsaCreditConfig).toHaveProperty('credit_config_id')
        expect(primsaCreditConfig).toHaveProperty('description')
        expect(primsaCreditConfig).toHaveProperty('dt_due')
        expect(primsaCreditConfig).toHaveProperty('installment_value')
        expect(primsaCreditConfig).toHaveProperty('credit_status')
    })

    it('Deveria trazer os dados correto para o dominio', ()=>{
        let creditConfig = PrismaCreditMapper.toDomain({
            id:'teste',
            user_id:'teste',
            category_id:'teste',
            credit_config_id:'teste' ,
            description:'teste' ,
            dt_due:new Date() ,
            installment_value: 2000 ,
            credit_status: new Date() ,
        })

        expect(creditConfig).toBeInstanceOf(Credit)
    })

})