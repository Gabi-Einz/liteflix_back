import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../Controllers/app.controller';
import { MovieController } from '../Controllers/MovieController';
import { MovieDao } from '../Daos/MovieDao';
import { importAllFromRequireContext } from '../Helpers/Utilities/ImportAllFromRequireContext';
import { AppService } from '../Services/app.service';
import { MovieService } from '../Services/MovieService';


@Module({
  imports: [
    TypeOrmModule.forFeature(importAllFromRequireContext(require.context("../Models/Entities/",true))),
  ],
  controllers: importAllFromRequireContext(require.context("../Controllers/",true)),
  providers: [...importAllFromRequireContext(require.context("../Services/",true)),
              ...importAllFromRequireContext(require.context("../Daos/",true)),
  ],
  exports: [TypeOrmModule]
})

export class LiteflixModule {}