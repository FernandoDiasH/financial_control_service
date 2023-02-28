import { Debit } from '../../../../app/entities/Debit';
import {Debit as prismaDebit} from  '@prisma/client'

export class PrismaDebitMapper {
    static toPrisma(debit: Debit) {
        return {
            id: debit.id,
            user_id: debit.user_id,
            category_id: debit.category_id,
            description: debit.description,
            value: debit.value,
            dt_purchase: debit.dt_purchase,
        };
    }

    static toDomain(prismaDebit: prismaDebit ){
        return new Debit({
            user_id: prismaDebit.user_id,
            description: prismaDebit.description,
            category_id: prismaDebit.category_id,
            dt_purchase: prismaDebit.dt_purchase,
            value:prismaDebit.value
        }, prismaDebit.id)
    }
}
