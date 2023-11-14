import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, CatsModule, LoggerModule.forRoot()],
})
export class AppModule {}
