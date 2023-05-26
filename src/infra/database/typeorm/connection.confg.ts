import { Category } from "src/modules/category/entity/category.entity";
import { DataSource, DataSourceOptions } from "typeorm";


export const connectionDatabaseConfig:DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root" ,
    password: "secret",
    database: "finance_service",
    logging:false,
    entities:[
        Category
    ]
}

export default new DataSource(connectionDatabaseConfig)