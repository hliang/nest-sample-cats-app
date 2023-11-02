import {Inject, Injectable} from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(
      @Inject(CACHE_MANAGER)
      private cacheManager: Cache,
  ) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    const cachedValue = await this.cacheManager
        .get("myKey")
        .catch(err => {
          console.error(`Failed to retrieve from the cache. Error: ${err}`);
        });
    if (cachedValue != null) {
      console.log("cache hit");
      return cachedValue as Cat[];
    } else {
      console.log("cache missed");
      await this.cacheManager.set("myKey", this.cats);
      return this.cats;
    }
  }
}
