import { randomUUID } from 'crypto'
import {describe, expect, it, } from 'vitest'
import { InMemoryCategoryRepository } from '../../../../test/repositories/InMemoryCategoryRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

describe('Create Category use case', ()=>{
    it('criar uma categoria espero registre', async  ()=>{

        const inMemoryCategoryRepository = new InMemoryCategoryRepository()
        const createCategoryUseCase = new CreateCategoryUseCase(inMemoryCategoryRepository)

        const categoria  = await createCategoryUseCase.execute({
            user_id:randomUUID(),
            description: "Categoria teste" 
        })

        expect(inMemoryCategoryRepository.categories).toHaveLength(1)
        expect(inMemoryCategoryRepository.categories[0]).toEqual(categoria)

    })
})