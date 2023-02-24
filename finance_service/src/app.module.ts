import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { AppService } from './app/services/app.service';
import { CategoryController } from '@infra/http/controllers/category.controller';
import { CreateCategory } from '@app/services/Category/CreateCategory';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
