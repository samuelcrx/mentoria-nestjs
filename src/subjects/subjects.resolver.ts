import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { SubjectsService } from './subjects.service';
import { Subject } from './schemas/subjects.schema';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { UsersService } from '@/users/users.service';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(
    private readonly subjectService: SubjectsService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => Subject)
  createSubject(
    @Args('createSubjectInput') createSubjectInput: CreateSubjectInput,
  ) {
    console.log('teste', createSubjectInput);
    console.log('===');

    return this.subjectService.create(createSubjectInput);
  }

  @Query(() => [Subject], { name: 'subjects' })
  findAll() {
    return this.subjectService.findAll();
  }

  @Query(() => Subject, { name: 'subject' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.subjectService.findOne(id);
  }

  @Mutation(() => Subject)
  updateSubject(
    @Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput,
  ) {
    return this.subjectService.update(
      updateSubjectInput.id,
      updateSubjectInput,
    );
  }

  @Mutation(() => Subject)
  removeSubject(@Args('id', { type: () => String }) id: string) {
    return this.subjectService.remove(id);
  }

  @ResolveField()
  user(@Parent() { user }: Subject) {
    return this.usersService.findOne(user._id);
  }
}
