import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Subject } from '@/subjects/schemas/subjects.schema';

export type ClassDocument = Class & Document;

@ObjectType()
@Schema()
export class Class {
  @Field(() => String, { description: 'class id' })
  _id: string;

  @Field(() => String, { description: 'class name' })
  @Prop({ unique: true })
  name: string;

  @Field(() => String, { description: 'class color' })
  @Prop()
  color?: string;

  @Field(() => String, { description: 'class  language' })
  @Prop()
  language: string;

  @Field(() => Subject, { description: 'class subject' })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Cape' })
  subject: Subject;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
