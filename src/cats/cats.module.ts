import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import {CacheModule} from "@nestjs/cache-manager";

@Module({
  // imports: [CacheModule.register()],
  // controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
