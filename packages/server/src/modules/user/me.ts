import { Resolver, Query, Ctx } from 'type-graphql';
import { User } from '../../entity/User';
import { AppContext } from '../../types/AppContext';

@Resolver()
export class MeResolver {

  @Query(() => User, {nullable: true})
  async me(
    @Ctx() ctx: AppContext
  ) {
    if(!ctx.req.session!.userId) return null

    return await User.findOne({id: ctx.req.session!.userId});
  }
}