import { Resolver, Mutation, Ctx } from "type-graphql";
import { AppContext } from "src/types/AppContext";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(
    @Ctx() context: AppContext
  ) {
    return new Promise((resolve, reject) =>
      context.req.session!.destroy(error => {
        if(error) reject(false);

        context.res.clearCookie('qid');
        resolve(true);
      })
    );
  }
}