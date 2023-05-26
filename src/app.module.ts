import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { AppService } from './app/services/app.service';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDatabaseConfig } from '@infra/database/typeorm/connection.confg';
import { CreditConfigModule } from './modules/creadiConfig/creditConfig.module';
import { DebitModule } from './modules/debit/debit.module';

@Module({
  imports: [
    // HttpModule, 
    TypeOrmModule.forRoot(connectionDatabaseConfig),
    CategoryModule,
    CreditConfigModule,
    DebitModule,
    // DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
