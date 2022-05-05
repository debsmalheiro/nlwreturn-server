import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c617e38aab6f11",
    pass: "36af69696223e0",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <suporte@feedget.com.br>",
      to: "Déborah <malheirolojas@gmail.com>",
      subject,
      html: body,
    });
  }
}
