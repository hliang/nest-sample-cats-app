import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
// import { FoobarMiddleware } from './common/middleware/foobar.middleware';

@Module({
  imports: [
    LoggerModule.forRoot(
      {
        pinoHttp: {
          autoLogging: false,
          quietReqLogger: true,
        }
      }
    ),
    CoreModule,
    CatsModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(FoobarMiddleware).forRoutes("*");
  // }
}
