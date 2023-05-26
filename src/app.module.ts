import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { AppService } from './app/services/app.service';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDatabaseConfig } from '@infra/database/typeorm/connection.confg';

@Module({
  imports: [
    // HttpModule, 
    TypeOrmModule.forRoot(connectionDatabaseConfig),
    CategoryModule
    // DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
