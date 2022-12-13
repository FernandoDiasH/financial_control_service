import { expect, test } from 'vitest'
import { Category } from './Category'

test('Criando uma categoria', ()=>{
    const categoria = new Category({
        user_id:1,
        description:"teste"
    })

    expect(categoria).toBeInstanceOf(Category)
})


test('Nao posso criar uma categoria com user_id negativo', ()=>{
    expect(()=>{
        return new Category({
            user_id: -10,
            description:"teste"
        })
    }).toThrow()
})