import { Resolver, Mutation, Arg } from "type-graphql";
import { Post } from "../../entity/Post";
import { PostOptions } from "./types/PostOption";
import { Translation } from "../../entity/Translation";

@Resolver()
export class UpdatePostResolver {
  @Mutation(() => Boolean)
  async updatePost(
    @Arg('id', () => String) id: string,
    @Arg('post', () => PostOptions) postOptions: PostOptions
  ) {
    const post = await Post.findOne(id);

    if (!post) return false

    const titleTranslations = await (await post.title).translations;
    const bodyTranslations = await (await post.body).translations;
    let translations: Translation[] = [];

    postOptions.content.forEach(content => {
      let titleTranslation = titleTranslations.find(tr => tr.locale === content.locale);
      let bodyTranslation = bodyTranslations.find(tr => tr.locale === content.locale);
      if(titleTranslation) {
        titleTranslation.text = content.title;
        translations.push(titleTranslation);
      } 
      if(bodyTranslation) {
        bodyTranslation.text = content.body;
        translations.push(bodyTranslation);
      }
    });
    Translation.save(translations);
    return true;
  }
}