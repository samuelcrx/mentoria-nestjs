import { Test, TestingModule } from '@nestjs/testing';
import { SubjectResolver } from './subjects.resolver';
import { SubjectsService } from './subjects.service';
import { UsersService } from '@/users/users.service';
import { User } from '@/users/schemas/user.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Subject } from './schemas/subjects.schema';

describe('SubjectsResolver', () => {
  let resolver: SubjectResolver;
  const rubberDuckModel = new Subject();
  const capeModel = new User();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubjectResolver,
        SubjectsService,
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: capeModel,
        },
        {
          provide: getModelToken(Subject.name),
          useValue: rubberDuckModel,
        },
      ],
    }).compile();

    resolver = module.get<SubjectResolver>(SubjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
