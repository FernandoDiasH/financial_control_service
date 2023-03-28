import { CreateCategory } from "@app/services/Category/CreateCategory";
import { GetDebits } from "@app/services/Debit/GetDebits";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CategoryController } from "./controllers/category.controller";
import { DebitController } from "./controllers/debit.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController, DebitController],
    providers: [
        CreateCategory,
        GetDebits,
    ],
})
export class HttpModule { } 