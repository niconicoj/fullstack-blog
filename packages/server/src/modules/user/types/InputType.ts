import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { IsValidPassword } from "./validators/isValidPassword";
import { IsEmailAlreadyExist } from "./validators/isEmailAlreadyExist";


@InputType()
export class RegisterInput {
  @Field()
  @Length(2, 255)
  nameFirst: string;

  @Field()
  @Length(2, 255)
  nameLast: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({message: "email is already in use."})
  email: string;

  @Field()
  @IsValidPassword({message: "wrong password format."})
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class ChangePasswordInput {
  @Field()
  token: string;

  @Field()
  @IsValidPassword({message: "wrong password format."})
  password: string;
}