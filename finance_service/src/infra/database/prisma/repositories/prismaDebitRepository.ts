import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import { PrismaDebitMapper } from "../mappers/prismaDebitMapper";

export class PrismaDebitRepository extends DebitAbstractRepository{
    constructor(
        private prisma:PrismaService
    ){
        super()
    }
    
    async getAll(user_id: string, start_dt?: Date, end_dt?: Date): Promise<Debit[]> {
        const raw = await this.prisma.debit.findMany({
            where:{
                user_id: user_id,
            }
        })

        return  raw.map(debit => PrismaDebitMapper.toDomain(debit))
    }
    async create(entitie: Debit): Promise<Debit> {
        const raw = PrismaDebitMapper.toPrisma(entitie);

        await this.prisma.debit.create({
            data: raw,
        });
        return entitie
    }
    
    async save(entitie: Debit): Promise<Debit> {
        throw new Error("Method not implemented.");
    }
    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async findById(userId: string): Promise<Debit> {
        throw new Error("Method not implemented.");
    }
    async findManyByUserId(userId: string): Promise<[] | Debit[]> {
        throw new Error("Method not implemented.");
    }
}



