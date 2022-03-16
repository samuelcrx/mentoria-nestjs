import { Test, TestingModule } from '@nestjs/testing';
import { ClassesService } from './classes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Class } from './schemas/class.schema';

describe('ClassesService', () => {
  let service: ClassesService;
  const subjectModel = new Class();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassesService,
        {
          provide: getModelToken(Class.name),
          useValue: subjectModel,
        },
      ],
    }).compile();

    service = module.get<ClassesService>(ClassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
