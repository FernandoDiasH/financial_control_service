import { describe, expect, it } from "vitest";
import { Credit } from "./Credit";
import { addMonths, parseISO, setMonth }   from 'date-fns'

describe('Credit',()=>{

    it('deveria pode criar uma instacia de Credit', ()=>{
        
        const credit = new Credit({
            user_id:"usuario-teste",
            category_id:'categoria-teste',
            description:'compra tv',
            dt_due: new Date(2022, 10, 20),
            installment_value:1111 
        })

        expect(credit).toBeInstanceOf(Credit)
    })

    it('teste', ()=>{
        let data_compra =parseISO('2022-11-10')

        console.log(addMonths(data_compra,1))
        console.log(data_compra.getDate() > 9)
    })




})