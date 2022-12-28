import { Debit } from "../../../../app/entities/Debit";

export class PrismaDebitMapper{
    
    static toPrisma(debit:Debit){
        return {
            id:debit.id,
            user_id:debit.user_id,
            category_id:debit.category_id,
            description:debit.description,
            value:debit.value,
            debit_type:debit.debit_type,
            dt_purchase:debit.dt_purchase,
        }
    }
}