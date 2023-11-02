import {Test, TestingModule} from "@nestjs/testing";
import {CatsService} from "./cats.service";
import {CatsController} from "./cats.controller";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import {CatsModule} from "./cats.module";
import {Cat} from "./interfaces/cat.interface";

describe('CatsService', () => {
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      // controllers: [CatsController],
      // imports: [CatsModule], // importing CatsModule here will cause error: Nest can't resolve dependencies of the CatsService (?). Please make sure that the argument CACHE_MANAGER at index [0] is available in the CatsModule context.
      providers: [CatsService, { provide: CACHE_MANAGER, useValue: { get: () => Promise.resolve(null), set: () => Promise.resolve(null) } }],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
  });

  describe('getAll', () => {
    it('should return an empty array', async () => {
      expect(await catsService.findAll()).toEqual([]);
    });
  });
});