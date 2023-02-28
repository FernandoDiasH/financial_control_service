

describe('Soma de todos os debitos por categoria', ()=>{
    it('Deveria trazer a soma de todos os debitos por categoria', ()=>{

        let sumCategories = {
            "entrada":2500,
            "saida": 2900,
            "conta fixa": 2000,
            "moto":600,
            "gasto extras":300
        }



        expect(sumCategories).toEqual({
            "entrada":2500,
            "saida": 2900,
            "conta fixa": 2000,
            "moto":600,
            "gasto extras":300
        })
    })
})