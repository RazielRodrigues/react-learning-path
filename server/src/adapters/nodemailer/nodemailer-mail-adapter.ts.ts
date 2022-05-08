import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4534d3e6df3a49",
      pass: "a85fc9555674a2"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
            transport.sendMail({
            from: 'Equipe do RZ <razielx3@live.com>',
            to: 'razielx3@live.com',
            subject: subject,
            html: body
        });
    }
}