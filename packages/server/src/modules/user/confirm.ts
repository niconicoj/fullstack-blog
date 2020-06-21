import { Resolver, Mutation, Arg } from 'type-graphql';

import { redis } from '../../redis';
import { User } from '../../entity/User';
import { tokenPrefixes } from '../../constants/tokenPrefix';

@Resolver()
export class confirmResolver {

  @Mutation(() => Boolean )
  async confirmMail(
    @Arg('token') token : string,
  ) {
    const userId = await redis.get(tokenPrefixes.CONFIRM_EMAIL + token);

    if(!userId) return false;
    await User.update({id: userId}, {emailConfirmed: true});
    redis.del(token);

    return true;
  }
}