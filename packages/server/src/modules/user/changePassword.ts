import { Resolver, Mutation, Arg } from 'type-graphql';
import * as Argon from 'argon2';

import { User } from '../../entity/User';
import { redis } from '../../redis';
import { ChangePasswordInput } from './types/inputType';
import { tokenPrefixes } from '../../constants/tokenPrefix';

@Resolver()
export class ChangePasswordResolver {

  @Mutation(() => User, {nullable: true})
  async changePassword(
    @Arg('payload', () => ChangePasswordInput) payload : ChangePasswordInput
  ) {
    const userId = await redis.get(tokenPrefixes.FORGOT_PASSWORD + payload.token);
    if(!userId) return null
    const hash = await Argon.hash(payload.password);
    const user = await User.findOne({ where: {id: userId}});
    if(!user) return null
    user.password = hash;
    user.save();
    return user;
  }
}