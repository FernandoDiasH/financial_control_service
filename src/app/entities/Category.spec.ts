import { expect, it, describe } from 'vitest'
import { Category } from './Category'
import { randomUUID } from 'node:crypto'

describe('Category', ()=>{
    it('deveria poder criar uma categoria', ()=>{
        const categoria = new Category({
            user_id:'user_id_teste',
            description:'descricao teste'  
        })  
        expect(categoria).toBeInstanceOf(Category)
        expect(categoria.id).toBeTypeOf('string')
    })

    it('deveria poder criar uma catergoria sem o id',()=>{
        const categoria = new Category({
            user_id: randomUUID(),
            description:"teste"
        })  
        expect(categoria).toBeInstanceOf(Category)
    })
})
