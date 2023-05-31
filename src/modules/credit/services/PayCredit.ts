import { Injectable, NotFoundException } from "@nestjs/common";
import { CreditRepository } from "../credit.repository";

@Injectable()
export class PayCredit {
    constructor(private creditRepository: CreditRepository) { }

    async execute(id: number) {
        const credit = await this.creditRepository.repository.findOneBy({id:id});
     
        if(!credit){
            throw new NotFoundException("Credit not found")
        }

        credit.credit_status = new Date()

        return await this.creditRepository.saveEntity([credit]);
    }
}
