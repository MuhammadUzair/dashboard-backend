import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3002;
  const env = process.env.NODE_ENV;
  const app = await NestFactory.create(AppModule);

  //Setup Sawgger for local development
  if (env === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Dashboard App')
      .setDescription('Dashboard App')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port);
  console.log('ENV ', process.env.DATBASE_URL);

  console.log('server running on port ', port);
}
bootstrap();
