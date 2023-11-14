import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { FoobarMiddleware } from '../common/middleware/foobar.middleware';

@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class CoreModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FoobarMiddleware).forRoutes("*");
  }
}
