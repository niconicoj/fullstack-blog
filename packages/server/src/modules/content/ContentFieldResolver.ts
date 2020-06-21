import { Resolver, FieldResolver, Root, Ctx } from "type-graphql";
import { Content } from "../../entity/Content";
import { AppContext } from "src/types/AppContext";

@Resolver(() => Content)
export class ContentFieldResolver {
  @FieldResolver(() => String,{nullable:true})
  async text(
    @Root() content: Content, 
    @Ctx() { translationLoader }: AppContext,
  ) {
     const text = await translationLoader.load(content.id);
     return text;
  }
}