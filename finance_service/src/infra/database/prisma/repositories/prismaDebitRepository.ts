import { Debit } from "@app/entities/Debit";
import { DebitAbstractRepository } from "@app/repositories/debitAbstractRepository";
import { Injectable } from "@nestjs/common";
import { raw } from "@prisma/client/runtime";
import { PrismaDebitMapper } from "../mappers/prismaDebitMapper";
import { Repository } from "./repository";

@Injectable()
export class PrismaDebitRepository extends Repository implements DebitAbstractRepository {

    async getAll(user_id: string, start_dt?: Date, end_dt?: Date): Promise<Debit[]> {

        const raw = await this.prisma.debit.findMany({
            where: {
                user_id: user_id,
            }
        })

        return raw.map(debit => PrismaDebitMapper.toDomain(debit))
    }

    async create(entity: Debit): Promise<Debit> {
        const raw = PrismaDebitMapper.toPrisma(entity);

        await this.prisma.debit.create({
            data: raw
        });
        return entity
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



