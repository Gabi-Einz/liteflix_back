import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envFilePathConfiguration } from './Config/EnvFilePathConfiguration';
import { nestEnvConfiguration } from './Config/NestEnvConfiguration';
import { DBConfigInterface } from './Config/DBConfigInterface';
import { LiteflixModule } from './Modules/LiteflixModule';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [envFilePathConfiguration()],
      load: [nestEnvConfiguration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => Object.assign(configService.get<DBConfigInterface>('DATABASE'))
    }),
    LiteflixModule
  ],
})
export class AppModule {}
