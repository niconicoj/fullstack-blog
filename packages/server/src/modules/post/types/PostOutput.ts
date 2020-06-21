import { ObjectType, Field } from "type-graphql";
import { Post } from "../../../entity/Post";

@ObjectType()
export class PostsOutput {
  @Field()
  pageCount: number;

  @Field(() => [Post], {nullable: true})
  posts: Post[];
}