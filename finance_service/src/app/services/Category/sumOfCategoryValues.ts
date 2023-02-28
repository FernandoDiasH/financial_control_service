import { Category } from "@app/entities/Category";
import { Credit } from "@app/entities/Credit";
import { Debit } from "@app/entities/Debit";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SumOfCategoryValues {

    protected debits:Debit[]
    protected creditis:Credit[]
    protected categories:Category[]

    constructor(
        private creditRepository: CreditAbstractRepository,
        private categoryRepository:CategoryAbstractRepository,
        private debitRepository:DebitAbstractRepository
    ){}

    async execute(userID: string){

        this.categories = await this.categoryRepository.findManyByUserId(userID)
        this.debits = await this.debitRepository.findManyByUserId(userID)
        this.creditis = await this.creditRepository.findManyByUserId(userID)

        let sumOfCategory = {}

        let entradaTotal = 0
        let saidaTotal = 0

        for (let category of this.categories){
            let valor = 0

            this.debits.forEach((debit)=>{
                if(debit.category_id === category.id){
                    valor =+ debit.value
                } 

                if(debit.category_id === category.id && category._type == 'Entrada'){
                    entradaTotal += debit.value
                }

                if(debit.category_id === category.id && category._type == 'Saida'){
                    saidaTotal += debit.value
                }
            })

            sumOfCategory[category._descripiton] = {
                [category._type]:valor,
            } 
        }

        // sumOfCategory = {
        //     entrada:entradaTotal,
        //     saida:saidaTotal
        // }
        console.log(sumOfCategory)
    }
}