import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(
    @InjectPinoLogger(CatsService.name)
    private readonly logger: PinoLogger,
) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.logger.info("findAll started");
    return this.cats;
  }
}
