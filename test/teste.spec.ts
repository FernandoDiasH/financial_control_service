import { describe, it } from "vitest";
import { prisma } from "../src/infra/database/prisma/prisma";

describe('area de teste', ()=>{
    it('testando quary do prisma', async ()=>{
      
        const dados = await prisma.credit.findMany({
            include:{
                category:true,
                credit_Config:true
            }
        })
        console.log(dados)
    })
})