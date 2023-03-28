import { makeCategory } from "@test/factories/Category";
import { makeCredit } from "@test/factories/CreditFactory";
import { makeDebit } from "@test/factories/DebitFactory";
import { InMemoryCategoryRepository } from "@test/repositories/InMemoryCategoryRepository";
import { InMemoryCreditConfigRepository } from "@test/repositories/InMemoryCreditConfigRepository"
import { InMemoryCreditRepository } from "@test/repositories/InMemoryCreditRepository"
import { InMemoryDebitRepository } from "@test/repositories/InMemoryDebitRepository";
import { SumOfCategoryValues } from "./sumOfCategoryValues";


let creditRepository = new InMemoryCreditRepository()
let categoryRepository = new InMemoryCategoryRepository();
let debitRepository = new InMemoryDebitRepository()

creditRepository.create(makeCredit({
    installment_value: 1200,
    category_id: 'categoria1'
}))

creditRepository.create(makeCredit({
    installment_value: 1000,
    category_id: 'categoria2'
}))

creditRepository.create(makeCredit({
    installment_value: 200,
    category_id: 'categoria3'
}))

categoryRepository.create(makeCategory({
    type: 'Entrada',
    description: 'remuneracao'
}, 'categoria1'))

categoryRepository.create(makeCategory({
    type: 'Saida',
    description: 'Conta fixa'
}, 'categoria2'))

categoryRepository.create(makeCategory({
    type: 'Saida',
    description: 'gasto extra'
}, 'categoria3'))


debitRepository.create(makeDebit({

}))
debitRepository.create(makeDebit())
debitRepository.create(makeDebit())


let sumOfCategoryValues = new SumOfCategoryValues(
    creditRepository,
    categoryRepository,
    debitRepository,
)



describe('Soma de todos os debitos por categoria', () => {
    it('Deveria trazer a soma de todos os debitos por categoria', () => {

        sumOfCategoryValues.execute('usuario-teste')








        let sumCategories = {
            "entrada": 2500,
            "saida": 2900,
            "conta fixa": 2000,
            "moto": 600,
            "gasto extras": 300
        }



        expect(sumCategories).toEqual({
            "entrada": 2500,
            "saida": 2900,
            "conta fixa": 2000,
            "moto": 600,
            "gasto extras": 300
        })
    })
})