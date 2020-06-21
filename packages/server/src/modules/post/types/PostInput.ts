import { InputType, Field } from "type-graphql";
import { IsLocaleExist } from "../../../validators/isLocaleExist";

@InputType()
class ContentInput {
  @Field()
  @IsLocaleExist()
  locale : string;

  @Field()
  title: string;

  @Field()
  body: string;
}

@InputType()
export class PostInput {
  @Field(() => [ContentInput])
  content: ContentInput[];
}