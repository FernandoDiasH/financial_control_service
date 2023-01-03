import { ICreditRepository } from "../../repositories/ICreditRepository";


export class PayCredit {
    
    constructor(
        private creditRepository: ICreditRepository
    ){}

    async execute(credit_id:string){

        const credit = await this.creditRepository.findByCreditID(credit_id)

        credit.pay()

        this.creditRepository.update(credit) 
    }
}