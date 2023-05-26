import { Category } from "@app/entities/Category"
import { makeCategory } from "@test/factories/Category"
import { PrismaCategoryMapper } from "./prismaCategoryMapper"

describe('Prisma category Mapper', ()=>{

    it('deveria trazer os dados correto para o Prisma', ()=>{
        let prismaCategory = PrismaCategoryMapper.toPrisma(makeCategory()) 
       
        expect(prismaCategory).toHaveProperty('id')
        expect(prismaCategory).toHaveProperty('user_id', )
        expect(prismaCategory).toHaveProperty('description')
        expect(prismaCategory).toHaveProperty('type_category')
    })

    it('Deveria trazer os dados correto para o domais', ()=>{
        let category = PrismaCategoryMapper.toDomain({
            id:"usuario-teste",
            user_id:"usuario-teste",
            description:"teste",
            type_category:"Entrada"
        }) 

        expect(category).toBeInstanceOf(Category)
    })
})