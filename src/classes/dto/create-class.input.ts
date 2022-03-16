import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateClassInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'class name' })
  name: string;

  @Field(() => String, { description: 'class subject' })
  subject: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'class color' })
  color?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String, { description: 'class language' })
  language: string;
}
