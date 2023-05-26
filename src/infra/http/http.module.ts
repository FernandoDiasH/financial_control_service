import { CreateCategory } from "@app/services/Category/CreateCategory";
import { CreateCredit } from "@app/services/Credit/CreateCredit";
import { FindCredits } from "@app/services/Credit/findCredits";
import { FindDistincstMonts } from "@app/services/Credit/findDistinctsMouth";
import { PayCredit } from "@app/services/Credit/PayCredit";
import { GetDebits } from "@app/services/Debit/GetDebits";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CategoryModule } from "src/modules/category/category.module";
import { CategoryController } from "../../modules/category/category.controller";
import { CreditController } from "./controllers/credit.controller";
import { CreditConfigController } from "../../modules/creadiConfig/creditConfig.controller";
import { DebitController } from "./controllers/debit.controller";

@Module({
    imports: [
        // DatabaseModule,
    ],
    controllers: [
        // CategoryController,
        // DebitController,
        // CreditConfigController,
        // CreditController
    ],
    providers: [
        // CreateCategory,
        // GetDebits,
        // CreateCredit,
        // FindCredits,
        // FindDistincstMonts,
        // PayCredit
    ],
})
export class HttpModule { } 