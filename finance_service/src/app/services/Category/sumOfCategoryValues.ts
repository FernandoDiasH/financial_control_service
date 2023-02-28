import { Category } from "@app/entities/Category";
import { Credit } from "@app/entities/Credit";
import { Debit } from "@app/entities/Debit";
import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
class SumOfCategoryValues {

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

        for (let category of this.categories){
            let entrada = 0
            let saida = 0

            this.debits.forEach((debit, index)=>{
                // if(debit.debit_type === "Entrada"){
                //     entrada += debit.value
                    
                // }

                // if(debit.debit_type === 'Saida'){
                //     saida += debit.value
                // }   
            })

            sumOfCategory[category._descripiton] = {
                entrada,
                saida
            } 
        }
    
        console.log(sumOfCategory)
    }
}