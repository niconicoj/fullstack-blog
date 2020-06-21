import { MailTemplate, MailParams } from "../types"
import { Mail } from "../../../entity/Mail";

interface ConfirmData { 
  name: string,
  websiteLink: string,
  confirmLink: string
}

export class ConfirmMail implements MailTemplate<ConfirmData> {

  template: string;
  recipient: string;
  subject: string;
  data: ConfirmData;

  init = async (params: MailParams<ConfirmData>) => {
    const mail = await Mail.findOne({where: {label: 'MAIL_CONFIRM'}, relations:['template','subject']});
    const template = await mail!.template.translations;
    this.template = template.find(tr => tr.locale === params.locale)!.text;
    const subject = await mail!.subject.translations;
    this.subject = subject.find(tr => tr.locale === params.locale)!.text;
    this.data = params.data;
    this.recipient = params.recipient;
  }
}

