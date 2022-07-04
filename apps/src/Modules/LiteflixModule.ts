import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { importAllFromRequireContext } from '../Helpers/Utilities/ImportAllFromRequireContext';

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