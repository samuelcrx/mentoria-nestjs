import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';
import { Class, ClassDocument } from './schemas/class.schema';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Class.name)
    private classModel: Model<ClassDocument>,
  ) {}

  create(createClassInput: CreateClassInput) {
    return this.classModel.create(createClassInput);
  }

  findAll() {
    return this.classModel.find().exec();
  }

  findOne(id: string) {
    return this.classModel.findById(id).exec();
  }

  update(id: string, updateClassInput: UpdateClassInput) {
    return this.classModel.findByIdAndUpdate(id, updateClassInput).exec();
  }

  remove(id: string) {
    return this.classModel.findByIdAndDelete(id).exec();
  }
}
