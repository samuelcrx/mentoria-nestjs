import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectResolver } from './subjects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from './schemas/subjects.schema';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    UsersModule,
  ],
  providers: [SubjectResolver, SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
