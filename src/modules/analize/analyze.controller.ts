import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { formatISO, getDate, getDay, parseISO, setDate, setDay } from "date-fns";
import { Between, IsNull } from "typeorm";
import { CategoryRepository } from "../category/category.repository";
import { CreditRepository } from "../credit/credit.repository";
import { DebitRepository } from "../debit/debit.repository";
import { Debit } from "../debit/entity/debit.entity";

@ApiTags('Analyze')
@Controller('analyze')
export class AnalyzeController {

    constructor(
        private debitRepository: DebitRepository,
        private creditRepository: CreditRepository,
        private categoryRepository:CategoryRepository
    ){}

    @Get(':userId')
    async analyze(@Param() req){
        
        let entries = await this.debitRepository.repository.sum("value", {
            category:{ 
                type:"Entrada"
            },
            id_user:req.userId
        })

        let outings = await this.debitRepository.repository.sum("value", {
            category:{ 
                type:"Saida"
            },
            id_user:req.userId
        })

        let months = await this.debitRepository.repository
            .createQueryBuilder()
            .distinct()
            .select("DATE_FORMAT(dt_purchase, '%m-%Y') as dt_purchase ")
            .where('id_user = :id_user', { id_user: req.userId })
            .getRawMany()

        let dateNow = new Date()
        let initialDate = setDate(dateNow, 1)
        let finalDate = getDate(dateNow) == 31 ? setDate(dateNow, 31 ) : setDate(dateNow, 30)
        
        let totalCreditToMonth = await this.creditRepository.repository.sum("installment_value", {
            id_user: req.userId,
            dt_due:  Between(initialDate, finalDate),
            credit_status: IsNull()
        })

        let debits = await this.debitRepository.repository.find({
            relations:{
                category:true
            },
            where:{
                id_user:req.userId,
                dt_purchase: Between(initialDate, finalDate),
                category:{
                    type:"Saida"
                }
            },
            order:{
                dt_purchase:"ASC"
            },
        }) 

        let credits = await this.creditRepository.repository.find({
            relations:{
                category:true
            },
            where:{
                id_user:req.userId,
                dt_due: Between(initialDate, finalDate),
                category:{
                    type:"Saida"
                }
            }
        })

        let sumOfCategory = debits.reduce((acc, debit) => {
            if(!acc[debit.category.description]){
                acc[debit.category.description] = 0
            }
            acc[debit.category.description] += debit.value
            return acc
        }, {})
       
        
        sumOfCategory = credits.reduce((acc, credit) => {
            if(!acc[credit.category.description]){
                acc[credit.category.description] = 0
            }
            acc[credit.category.description] += credit.installment_value
            return acc
        }, sumOfCategory)


        return {
            balance: entries - outings,
            entries: entries,
            outings: outings,
            creditValue: totalCreditToMonth ? totalCreditToMonth : 0,
            months: months.map(month => month.dt_purchase),
            sumOfCategory: sumOfCategory
        }
    }
}