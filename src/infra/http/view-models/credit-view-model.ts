import { Category } from "../../../app/entities/Category";
import { Credit } from "../../../app/entities/Credit";
import { CreditConfig } from "../../../app/entities/CreditConfig";

interface CreditsData{
    credits:Credit[]
    categories:Category[]
    creditConfig:CreditConfig[]
}

export class CreditViewModel{
    static toHTTP(data:CreditsData){
        return data.credits.map(credit => {
            const category = data.categories.find(category =>  credit.category_id == category.id )
            
            const creditConfig = data.creditConfig.find( config => credit.credit_config_id == config.id )
            return {
                id:credit.id,
                vencimento:credit.dt_due,
                descricao:credit.description,
                valor_parcela:credit.installment_value,
                status:credit.credit_status ,
                categoria:category?._descripiton,
                banco:creditConfig?.description
            }
        })
    }
}