import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { MovieController } from './Controllers/MovieController';
import { MovieDao } from './Daos/MovieDao';
import { AppService } from './Services/app.service';
import { MovieService } from './Services/MovieService';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService, MovieDao],
})
export class AppModule {}
