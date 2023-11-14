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
    this.logger.info("FoobarMiddleware Request received"); // no request id here

    const originalSend = res.send;
    res.send = (rawBody: unknown): Response => {
      this.logger.info("FoobarMiddleware Response sent"); // request id present

      res.send = originalSend;
      return res.send(rawBody);
    };

    next();
  }
}
