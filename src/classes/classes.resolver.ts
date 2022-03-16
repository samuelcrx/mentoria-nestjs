import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { ClassesService } from './classes.service';
import { Class } from './schemas/class.schema';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';
import { SubjectsService } from '@/subjects/subjects.service';

@Resolver(() => Class)
export class ClassesResolver {
  constructor(
    private readonly classesService: ClassesService,
    private subjectsService: SubjectsService,
  ) {}

  @Mutation(() => Class)
  createClass(@Args('createClassInput') createClassInput: CreateClassInput) {
    return this.classesService.create(createClassInput);
  }

  @Query(() => [Class], { name: 'classes' })
  findAll() {
    return this.classesService.findAll();
  }

  @Query(() => Class, { name: 'class' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.classesService.findOne(id);
  }

  @Mutation(() => Class)
  updateClass(@Args('updateClassInput') updateClassInput: UpdateClassInput) {
    return this.classesService.update(updateClassInput.id, updateClassInput);
  }

  @Mutation(() => Class)
  removeClass(@Args('id', { type: () => String }) id: string) {
    return this.classesService.remove(id);
  }

  @ResolveField()
  subject(@Parent() { subject }: Class) {
    return this.subjectsService.findOne(subject._id);
  }
}
