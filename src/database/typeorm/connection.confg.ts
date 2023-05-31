import { Category } from "src/modules/category/entity/category.entity";
import { CreditConfig } from "src/modules/creadiConfig/entity/creditConfig.entity";
import { Credit } from "src/modules/credit/entity/credit.entity";
import { Debit } from "src/modules/debit/entity/debit.entity";
import { DataSource, DataSourceOptions } from "typeorm";


export const connectionDatabaseConfig:DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root" ,
    password: "secret",
    database: "finance_service",
    logging:false,
    entities:[
        Category,
        CreditConfig,
        Debit,
        Credit
    ]
}

export default new DataSource(connectionDatabaseConfig)