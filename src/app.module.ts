import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    CacheModule.register({
      isGlobal: true,
    }),
    CatsModule
  ],
})
export class AppModule {}
