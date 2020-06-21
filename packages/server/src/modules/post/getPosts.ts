import { Resolver, Query, Arg } from "type-graphql";
import { Post } from "../../entity/Post";
import { PostsOutput } from "./types/PostOutput";

@Resolver()
export class GetPostResolver {
  
  @Query(() => Post, {nullable: true})
  post(
    @Arg("postId", () => String) id: string
  ) {
    return Post.findOne(id);
  }

  @Query(() => PostsOutput, {nullable: true})
  async posts(
    @Arg('page', () => Number,{nullable: true}) page: number
  ) {
    if(page < 1) return null;
    const result = await Post.findAndCount({
      order:{
        createdAt: "DESC"
      },
      skip: (page-1)*10 ?? 0,
      take: 10
    });
    return {
      pageCount: Math.ceil(result[1]/10),
      posts: result[0]
    }
  }
}