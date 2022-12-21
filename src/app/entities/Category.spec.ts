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

    it('nao deveria criar uma categoria com id e user_id com numeros', ()=>{
        expect(()=>{
            new Category({
                id:23232,
                user_id: 23232,
                description:"teste"
            })
        }).toThrow()
    })

    it('deveria poder criar uma catergoria sem o id',()=>{
        const categoria = new Category({
            user_id: randomUUID(),
            description:"teste"
        })  
        expect(categoria).toBeInstanceOf(Category)
    })
})
