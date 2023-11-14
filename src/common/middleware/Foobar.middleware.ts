import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from "nestjs-pino";

@Injectable()
export class FoobarMiddleware implements NestMiddleware {
  constructor(
    @InjectPinoLogger(FoobarMiddleware.name)
    private logger: PinoLogger,
) {
    console.log("foobar middleware constructor bindings", this.logger.logger?.bindings());
}

  use(req: any, res: any, next: () => void) {
    console.log(`Request...`);
    this.logger.info("foobar middleware called. We want to have reqId in this log.");
    next();
  }
}
