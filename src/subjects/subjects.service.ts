import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { InjectModel } from '@nestjs/mongoose';
import { Subject, SubjectDocument } from './schemas/subjects.schema';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name)
    private subjectModel: Model<SubjectDocument>,
  ) {}

  create(createSubjectInput: CreateSubjectInput) {
    return this.subjectModel.create(createSubjectInput);
  }

  findAll() {
    return this.subjectModel.find().exec();
  }

  findOne(id: string) {
    return this.subjectModel.findById(id).exec();
  }

  update(id: string, updateSubjectInput: UpdateSubjectInput) {
    return this.subjectModel.findByIdAndUpdate(id, updateSubjectInput).exec();
  }

  remove(id: string) {
    return this.subjectModel.findByIdAndDelete(id).exec();
  }
}
