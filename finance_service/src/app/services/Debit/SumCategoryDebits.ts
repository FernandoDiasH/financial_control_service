import { CategoryAbstractRepository } from "@app/repositories/categoryAbstractRepository";
import { CreditAbstractRepository } from "@app/repositories/CreditAbstractRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
class SumCategoryDebits {

    constructor(
        private creditRepository: CreditAbstractRepository,
        private categoryRepository:CategoryAbstractRepository
    ){}

    execute(userID: string){

        






    }
}