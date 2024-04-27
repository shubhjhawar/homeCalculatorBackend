import { Body, Controller, Post } from '@nestjs/common';
import { SendEmailDto } from 'src/dto/sendEmail.dto';
import { SendGridService } from 'src/send-grid/send-grid.service';

@Controller('email')
export class EmailController {
  constructor(private sendGridService: SendGridService) {}

  @Post()
  async getDistance(@Body() data: SendEmailDto) {
    let html = `<p>`;
    html += `Phone number: ${data.phoneNumber}, <br />`;
    html += `Full name: ${data.fullName}, <br />`;
    html += `Hours range: ${data.hoursRangeStart}~${data.hoursRangeEnd}, <br />`;
    html += `Moving date: ${data.movingDate}, <br />`;
    html += `Additional details: ${data.additionalDetails}, <br />`;
    html += `Moving details: ${data.movingDetails}, <br />`;
    html += `</p>`;

    const mailData = {
      from: {
        email: 'hello@birky.app',
        name: `Test@test.com`,
      },
      to: 'test@test.com',
      subject: 'Test',
      html: html,
    };

    return this.sendGridService.send(mailData);
  }
}
