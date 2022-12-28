import { CreditConfig } from "../entities/CreditConfig";

export interface ICreditConfiRepository{
    create(creditConfig:CreditConfig ):Promise<void>
    findByID(creditConifgID:string):Promise<CreditConfig | null>
}