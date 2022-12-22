import { Debit } from "../../entities/Debit";
import { IDebitRepository } from "../../repositories/IDebitRepository";

interface DebitDTO{
    user_id:string
    description:string
    value:number
    category_id:string
    dt_purchase:string
    debit_type:string
}

export class CreateDebit {

    constructor(
        private debitRepository:IDebitRepository
    ){}

    async execute(request:DebitDTO){

        const debit = new Debit({
            user_id: request.user_id,
            category_id:request.category_id,
            debit_type: request.debit_type,
            description:request.description,
            dt_purchase: request.dt_purchase,
            value: request.value
        })

        this.debitRepository.create(debit)

        return debit
    }
}