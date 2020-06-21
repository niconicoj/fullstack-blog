import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import * as Argon from 'argon2';

import { RegisterInput } from './types/inputType';
import { User } from '../../entity/User';
import { mailer } from '../../helpers/mail/Mailer';
import { createConfirmUrl } from './utils/createConfirmUrl';
import { ConfirmMail } from '../../helpers/mail/templates/confirmTemplate';
import { AppContext } from '../../types/AppContext';

@Resolver()
export class RegisterResolver {

  @Mutation((() => User))
  async register(
    @Arg('user', () => RegisterInput) registerInput : RegisterInput,
    @Ctx() ctx: AppContext
  ) {
    const hash = await Argon.hash(registerInput.password);
    const user = await User.create({
      ...registerInput,
      password: hash
    }).save();

    const locale = ctx.req.session!.locale ?? 'en';
    
    const confirmMail = new ConfirmMail();
    await confirmMail.init({
      recipient: user.email,
      locale: locale,
      data: {
        name: user.name(),
        websiteLink: process.env.APP_URL!,
        confirmLink: createConfirmUrl(user.id)
      }
    });

    await mailer.sendMail(confirmMail);
    return user;
  }
}