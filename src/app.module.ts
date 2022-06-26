import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './Controllers/app.controller';
import { MovieController } from './Controllers/MovieController';
import { MovieDao } from './Daos/MovieDao';
import { AppService } from './Services/app.service';
import { MovieService } from './Services/MovieService';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'liteflix-mysql',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'liteflix_db',
    entities: ["apps/src/Models/Entities/**/*.{ts,js}"],
    migrations: ["apps/src/Migrations/**/*.{ts,js}"],
    synchronize: false,
    autoLoadEntities: false,
    keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService, MovieDao],
})
export class AppModule {}
