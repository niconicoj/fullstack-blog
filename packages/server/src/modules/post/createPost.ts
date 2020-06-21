import { Resolver, Mutation, Arg } from "type-graphql";
import { PostInput } from "./types/PostInput";
import { Post } from "../../entity/Post";
import { Translation } from "../../entity/Translation";
import { Content } from "../../entity/Content";
import { getManager } from "typeorm";

@Resolver()
export class CreatePostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg('post', () => PostInput) post: PostInput
  ) {
    const newPost = await getManager().transaction(async transactionalEntityManager => {
      let title = Content.create();
      let body = Content.create();
      title = await transactionalEntityManager.save(title);
      body = await transactionalEntityManager.save(body);
      let traductions = post.content.flatMap(item => {
        return [
          Translation.create({locale:item.locale, text: item.title, content: title}),
          Translation.create({locale: item.locale, text:item.body, content: body})
        ] 
      });
      traductions = await transactionalEntityManager.save(traductions);
      let newPost = new Post();
      newPost.body = Promise.resolve(body);
      newPost.title = Promise.resolve(title);
      return await transactionalEntityManager.save(newPost);
    }); 
    return newPost;
  }
}