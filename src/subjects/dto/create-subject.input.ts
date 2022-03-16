import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSubjectInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "subject's name" })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: "subject's description" })
  description: string;

  @Field(() => String, { description: "subject's teacher image" })
  teacher_image: string;

  @Field(() => String, { description: "subject's user id" })
  user: string;
}
