import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IEmailConsumerService, IEmailParams } from './structure';
import { EmailConsumerService } from './email-consumer.service';

@Controller('emails')
export class EmailConsumerController {
  constructor(
    @Inject(EmailConsumerService)
    private readonly emailService: IEmailConsumerService,
  ) {}

  @MessagePattern('emails')
  consumer(@Payload() dataEmail: IEmailParams) {
    this.emailService.sendEmail(dataEmail);
  }
}
