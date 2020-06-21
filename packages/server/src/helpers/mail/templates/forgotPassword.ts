import { MailTemplate, MailParams } from "../types"
import { Mail } from "../../../entity/Mail";

interface ForgotPasswordData { 
  websiteLink: string,
  resetLink: string
}

export class ForgotPasswordMail implements MailTemplate<ForgotPasswordData> {

  template: string;
  recipient: string;
  subject: string;
  data: ForgotPasswordData;

  init = async (params: MailParams<ForgotPasswordData> ) => {
    const mail = await Mail.findOne({where: {label: 'MAIL_FORGOT_PASSWORD'}, relations:['template','subject']})
    const template = await mail!.template.translations;
    const subject = await mail!.subject.translations;
    this.template = template.find(tr => tr.locale === params.locale)!.text;
    this.subject = subject.find(tr => tr.locale === params.locale)!.text;
    this.data = params.data;
    this.recipient = params.recipient;
  }
}

