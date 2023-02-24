import { CreateCategory } from "@app/services/Category/CreateCategory";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { CategoryController } from "./controllers/category.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryController],
    providers: [
        CreateCategory
    ],
  })
  export class HttpModule {} 