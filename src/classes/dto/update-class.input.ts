import { CreateClassInput } from './create-class.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateClassInput extends PartialType(CreateClassInput) {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
