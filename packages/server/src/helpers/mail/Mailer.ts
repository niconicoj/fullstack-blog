import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import ejs from 'ejs';

import Mail from 'nodemailer/lib/mailer';
import { MailTemplate } from './types';

const { OAuth2 } = google.auth;
const OAUTH_URL = 'https://developers.google.com/oauthplayground';

interface MailerParams {
  clientId: string,
  clientSecret: string,
  refreshToken: string,
  fromAddress: string
}

class Mailer {

  oauthClient: InstanceType<typeof OAuth2>;
  accessToken?: string;
  smtpTransport: Mail;
  templateDir: string;
  fromAddress: string;
  
  constructor(params: MailerParams) {

    this.templateDir = `${__dirname}/templates/`;    
    this.fromAddress = params.fromAddress;

    this.oauthClient = new OAuth2(
      params.clientId,
      params.clientSecret,
      OAUTH_URL
    );

    this.oauthClient.setCredentials({refresh_token: params.refreshToken});

    this.oauthClient.getAccessToken().then(res => {
      this.accessToken = res.token ?? undefined;
    }).catch(err => {
      console.log(err)
    });

    this.smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: params.fromAddress,
        clientId: params.clientId,
        clientSecret: params.clientSecret,
        refreshToken: params.refreshToken,
        accessToken: this.accessToken
      }
    });
  }

  async sendMail<T>(mail: MailTemplate<T>) {
    const content = await ejs.render(mail.template, mail.data, {});
    const mailOptions = {
      from: this.fromAddress,
      to: mail.recipient,
      subject: mail.subject,
      html: content
    };

    const info = await this.smtpTransport.sendMail(mailOptions);
    if(info.rejected.length === 0) return "all mail sent successfully.";
    return "some mail could not be sent.";
  }
}

export const mailer = new Mailer({
  clientId: process.env.MAIL_CLI_ID!,
  clientSecret: process.env.MAIL_CLI_SECRET!,
  refreshToken: process.env.MAIL_REFRESH_TOKEN!,
  fromAddress: process.env.MAIL_FROM!
});