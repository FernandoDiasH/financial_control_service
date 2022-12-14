import { CreditConfig } from "../entities/CreditConfig";

export interface ICreditConfiRepository{
    create(creditConfig:CreditConfig ):Promise<void>
}