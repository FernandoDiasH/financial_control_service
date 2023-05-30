import { Controller, Get, Param } from "@nestjs/common";
import { formatISO, getDate, getDay, parseISO, setDate, setDay } from "date-fns";
import { Between, IsNull } from "typeorm";
import { CategoryRepository } from "../category/category.repository";
import { CreditRepository } from "../credit/credit.repository";
import { DebitRepository } from "../debit/debit.repository";
import { Debit } from "../debit/entity/debit.entity";


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
        
        let debits = await this.debitRepository.repository.find({
            where:{
                id_user:req.userId,
                dt_purchase: Between(initialDate, finalDate)
            },
            order:{
                dt_purchase:"ASC"
            }
        }) 

        let totalCreditToMonth = await this.creditRepository.repository.sum("installment_value", {
            id_user: req.userId,
            dt_due:  Between(initialDate, finalDate),
            credit_status: IsNull()
        })

        let credits = await this.creditRepository.repository.find({
            where:{
                id_user:req.userId,
                dt_due: Between(initialDate, finalDate)
            }
        })

        let sumOfCategory  = await this.categoryRepository.repository.find({
            relations:{
                credits:true,
                debits:true,
            },
            where:{
                id_user:req.userId,
                // credits:{
                //     dt_due: Between(initialDate, finalDate)
                // },
                debits:{
                    dt_purchase:Between(initialDate, finalDate)
                }
            }

        })

        let result = sumOfCategory.reduce((acc, category) => {
            let debitValue:number = category.debits.reduce((acc,  debit ) =>  acc  + debit.value,  0)
            let creditValue = category.credits.reduce((acc, credit) => acc + credit.installment_value, 0)
            acc[category.description] = debitValue + creditValue

            return acc
        }, {} )

        console.log(sumOfCategory);
        console.log(result);
        
            
        return {
            entries: entries,
            outings: outings,
            creditValue: totalCreditToMonth ? totalCreditToMonth : 0,
            months: months.map(month => month.dt_purchase),
            debits: debits,
            credits: credits
        }
    }
}