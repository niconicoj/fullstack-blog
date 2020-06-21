import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';

import { User } from '../../entity/User';
import { mailer } from '../../helpers/mail/Mailer';
import { createForgotPasswordLink } from './utils/createForgotPasswordLink';
import { ForgotPasswordMail } from '../../helpers/mail/templates/forgotPassword';
import { AppContext } from 'src/types/AppContext';

@Resolver()
export class ForgotPasswordResolver {

  @Mutation((() => Boolean))
  async forgotPassword(
    @Arg('email', () => String) email : string,
    @Ctx() ctx: AppContext
  ) {
    const user = await User.findOne({where: {email}});

    if(!user) return true;

    const locale = ctx.req.session!.locale ?? 'en';

    const forgotPasswordMail = new ForgotPasswordMail();
    await forgotPasswordMail.init({
      recipient: user.email,
      locale: locale,
      data: {
        websiteLink: process.env.APP_URL!,
        resetLink: createForgotPasswordLink(user.id)
      }
    })

    await mailer.sendMail(forgotPasswordMail);
    return true;
  }
}