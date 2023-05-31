import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const documentConfig = new DocumentBuilder()
    .setTitle("Finance-API")
    .setDescription("API para gerenciar lançamentos de gastos como debito e credito. ")
    .setVersion('1.0')
    .build()

    const document = SwaggerModule.createDocument(app, documentConfig)
    SwaggerModule.setup('api', app, document, {
      swaggerOptions:{
        docExpansion: 'none'
      }
    })

    await app.listen(3000);
}
bootstrap();
