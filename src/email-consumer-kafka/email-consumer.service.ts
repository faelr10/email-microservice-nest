import { Injectable } from '@nestjs/common';
import { IEmailConsumerService, IEmailParams } from './structure';

@Injectable()
export class EmailConsumerService implements IEmailConsumerService {
  sendEmail(data: IEmailParams): void {
    console.log(
      `Sending email to ${data.to} with subject ${data.subject} and text ${data.text}`,
    );
  }
}
