import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import * as Argon from 'argon2';

import { LoginInput } from './types/inputType';
import { User } from '../../entity/User';
import { AppContext } from 'src/types/AppContext';

@Resolver()
export class LoginResolver {

  @Mutation(() => User, ({nullable: true}))
  async login(
    @Arg('user', () => LoginInput) loginInput : LoginInput,
    @Ctx() ctx: AppContext
  ) {
    const user = await User.findOne({where: {email: loginInput.email}});
    if(!user) return null;

    const checkPwd = await Argon.verify(user.password, loginInput.password);
    
    if(!checkPwd) return null;
   
    ctx.req.session!.userId = user.id;
    ctx.req.session!.role = user.role;
    return user;
  }
}