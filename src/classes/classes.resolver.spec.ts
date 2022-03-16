import { Test, TestingModule } from '@nestjs/testing';
import { ClassesResolver } from './classes.resolver';
import { ClassesService } from './classes.service';
import { SubjectsService } from '@/subjects/subjects.service';
import { Subject } from '@/subjects/schemas/subjects.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Class } from './schemas/class.schema';

describe('ClassesResolver', () => {
  let resolver: ClassesResolver;
  const classModel = new Class();
  const subjectModel = new Subject();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassesResolver,
        ClassesService,
        SubjectsService,
        {
          provide: getModelToken(Subject.name),
          useValue: subjectModel,
        },
        {
          provide: getModelToken(Class.name),
          useValue: classModel,
        },
      ],
    }).compile();

    resolver = module.get<ClassesResolver>(ClassesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
