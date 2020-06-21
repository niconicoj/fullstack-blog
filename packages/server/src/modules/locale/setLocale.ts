import { Resolver, Mutation, Ctx, Arg } from "type-graphql";
import { AppContext } from "../../types/AppContext";
import { Locale } from "../../entity/Locale";

@Resolver()
export class SetLocaleResolver {

  @Mutation(() => Boolean)
  async setLocale(
    @Arg('locale', () => String) locale: string,
    @Ctx() ctx: AppContext
  ) {
    const lc = await Locale.findOne({label: locale});
    if(!lc) return false;

    ctx.req.session!.locale = locale;

    return true;
  }
}