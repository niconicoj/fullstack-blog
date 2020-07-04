import { InputType, Field } from "type-graphql";
import { IsLocaleExist } from "../../../validators/isLocaleExist";

@InputType()
class ContentOptions {
  @Field()
  @IsLocaleExist()
  locale : string;

  @Field({nullable: true})
  title: string;

  @Field({nullable: true})
  body: string;
}

@InputType()
export class PostOptions {
  @Field(() => [ContentOptions])
  content: ContentOptions[];
}