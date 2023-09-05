import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3001;
  const env = process.env.NODE_ENV;
  const app = await NestFactory.create(AppModule);

  //Setup Sawgger for local development
  if (env === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Shipment App')
      .setDescription('The Shipment App user service')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port);

  console.log('server running on port ', port);
}
bootstrap();
