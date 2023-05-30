import { Module } from '@nestjs/common';
import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditConfigModule } from './modules/creadiConfig/creditConfig.module';
import { DebitModule } from './modules/debit/debit.module';
import { connectionDatabaseConfig } from './database/typeorm/connection.confg';
import { CreditModule } from './modules/credit/credit.module';
import { analyzeModule } from './modules/analize/analyze.module';

@Module({
  imports: [
    // HttpModule, 
    TypeOrmModule.forRoot({...connectionDatabaseConfig, autoLoadEntities:true}),
    CategoryModule,
    CreditConfigModule,
    DebitModule,
    CreditModule,
    analyzeModule
    // DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
