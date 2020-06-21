import { Resolver, Mutation, Arg } from "type-graphql";
import { Post } from "../../entity/Post";

@Resolver()
export class DeletePostResolver {
  @Mutation(() => Boolean)
  async deletePost(
    @Arg('postId', () => String) postId: string
  ) {
    const post =  await Post.findOne(postId);
    if(!post) return true;
    await Post.remove(post);
    return true;
  }
}