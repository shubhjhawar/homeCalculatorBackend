import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendGridService {
  constructor() {
    SendGrid.setApiKey(process.env.SEND_GRID_API_KEY);
  }

  async send(mail: SendGrid.MailDataRequired) {
    try {
      return await SendGrid.send(mail);
    } catch (e) {}
  }
}
