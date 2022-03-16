import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Class, ClassSchema } from './schemas/class.schema';
import { SubjectsModule } from '@/subjects/subjects.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }]),
    SubjectsModule,
  ],
  providers: [ClassesResolver, ClassesService],
})
export class ClassesModule {}
