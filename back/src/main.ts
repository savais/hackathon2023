import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { getEnv } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerInfo = {
    api_path: "/docs",
    title: "Packet API",
    description: "API to find and download packets",
    version: "0.1",
    tag: ""
  };

  const config = new DocumentBuilder()
    .setTitle(swaggerInfo.title)
    .setDescription(swaggerInfo.description)
    .setVersion(swaggerInfo.version)
    .addTag(swaggerInfo.tag)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerInfo.api_path, app, document);
  
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    "origin": "http://localhost:4200",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
  });
  
  await app.listen(getEnv("PORT"));
}
bootstrap();
