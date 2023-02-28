import { Debit } from "@app/entities/Debit"
import { makeDebit } from "@test/factories/DebitFactory"
import { PrismaDebitMapper } from "./prismaDebitMapper"

describe('Prisma credit mapper ', ()=>{

    it('Deveria trazer os dados corretos para o prisma', ()=>{
        let prismaDebit = PrismaDebitMapper.toPrisma(makeDebit())

        expect(prismaDebit).toHaveProperty('id')
        expect(prismaDebit).toHaveProperty('user_id')
        expect(prismaDebit).toHaveProperty('description')
        expect(prismaDebit).toHaveProperty('category_id')
        expect(prismaDebit).toHaveProperty('dt_purchase')
        expect(prismaDebit).toHaveProperty('value')
    })

    it('Deveria trazer os dados correto para o dominio', ()=>{
        let debit = PrismaDebitMapper.toDomain({
            id:'teset',
            user_id:'test' ,
            description:'teste' ,
            category_id: 'teste',
            dt_purchase: new Date() ,
            value:1212
        })

        expect(debit).toBeInstanceOf(Debit)
    })

})