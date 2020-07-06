import { Resolver, Query, Arg } from "type-graphql";
import { Content } from "../../entity/Content";

@Resolver()
export class GetContentResolver {
  @Query(() => Content, {nullable: true})
  async content(
    @Arg('label', () => String) label: string
  ) {
    return await Content.findOne({label: label});
  }
}