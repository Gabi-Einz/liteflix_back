import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from 'apps/src/app.module';
import * as bodyParser from 'body-parser';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const resourcesPath: string = '/var/www/html/apps/resources';
  console.log(resourcesPath);
  app.useStaticAssets(resourcesPath, {
    index:false,
    prefix: '/resources'
  });
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors();
  await app.listen(3009);
}
bootstrap();
