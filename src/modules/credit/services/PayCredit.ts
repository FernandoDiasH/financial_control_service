import { Injectable, NotFoundException } from "@nestjs/common";
import { CreditRepository } from "../credit.repository";

@Injectable()
export class PayCredit {
    constructor(private creditRepository: CreditRepository) { }

    async execute(userId:string, credit_id: string) {
        const credit = await this.creditRepository.findOneByUserId(credit_id, userId);
     
        if(!credit){
            throw new NotFoundException("Credit not found")
        }

        credit.credit_status = new Date()

        return await this.creditRepository.saveEntity([credit]);
    }
}
