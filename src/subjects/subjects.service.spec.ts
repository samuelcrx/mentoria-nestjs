import { Test, TestingModule } from '@nestjs/testing';
import { SubjectsService } from './subjects.service';
import { getModelToken } from '@nestjs/mongoose';
import { Subject } from './schemas/subjects.schema';

describe('SubjectsService', () => {
  let service: SubjectsService;
  const subjectModel = new Subject();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubjectsService,
        {
          provide: getModelToken(Subject.name),
          useValue: subjectModel,
        },
      ],
    }).compile();

    service = module.get<SubjectsService>(SubjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
