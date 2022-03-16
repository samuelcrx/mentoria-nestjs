import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '@/users/schemas/user.schema';

export type SubjectDocument = Subject & Document;

@ObjectType()
@Schema()
export class Subject {
  @Field(() => String, { description: "Subject's id" })
  _id: string;

  @Field(() => String, { description: "Subject's name" })
  @Prop()
  name: string;

  @Field(() => String, { description: "Subject's description" })
  @Prop()
  description: string;

  @Field(() => String, {
    description: "Subject's teacher image url",
  })
  @Prop()
  teacher_image: string;

  @Field(() => User, { description: "subject's user" })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
