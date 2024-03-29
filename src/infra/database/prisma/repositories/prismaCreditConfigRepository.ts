import { Injectable } from "@nestjs/common";
import { CreditConfig } from "src/app/entities/CreditConfig";
import { CreditConfigAbstractRepository } from "src/app/repositories/creditConfigAbstractRepository";
import { PrismaCreditconfigMapper } from "../mappers/prismaCreditConfigMapper";
import { Repository } from "./repository";

@Injectable()
export class PrismaCreditConfigRepository extends Repository implements CreditConfigAbstractRepository {

    async create(entitie: CreditConfig): Promise<CreditConfig> {
        const raw = PrismaCreditconfigMapper.toPrisma(entitie);

        await this.prisma.creditConfig.create({
            data: raw,
        });

        return entitie
    }

    async save(entitie: CreditConfig): Promise<CreditConfig> {
        throw new Error("Method not implemented.");
    }

    async delete(userID: string, entititeId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findById(creditConfigID: string): Promise<CreditConfig> {
        const data = await this.prisma.creditConfig.findUniqueOrThrow({
            where: {
                id: creditConfigID,
            },
        });

        return PrismaCreditconfigMapper.toDomain(data);
    }

    async findManyByUserId(userId: string): Promise<[] | CreditConfig[]> {
        const data = await this.prisma.creditConfig.findMany({
            where: {
                user_id: userId,
            },
        });

        return data.map((creditConfig) =>
            PrismaCreditconfigMapper.toDomain(creditConfig)
        );
    }
}
