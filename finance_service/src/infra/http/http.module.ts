import { CreateCategory } from "@app/services/Category/CreateCategory";
import { CreateCredit } from "@app/services/Credit/CreateCredit";
import { FindCredits } from "@app/services/Credit/findCredits";
import { GetDebits } from "@app/services/Debit/GetDebits";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CategoryController } from "./controllers/category.controller";
import { CreditController } from "./controllers/credit.controller";
import { CreditConfigController } from "./controllers/creditConfig.controller";
import { DebitController } from "./controllers/debit.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [
        CategoryController,
        DebitController,
        CreditConfigController,
        CreditController
    ],
    providers: [
        CreateCategory,
        GetDebits,
        CreateCredit,
        FindCredits
    ],
})
export class HttpModule { } 