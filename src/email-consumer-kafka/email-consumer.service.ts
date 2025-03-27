import { Inject, Injectable } from '@nestjs/common';
import { IEmailConsumerService, IEmailParams } from './structure';
import { LogProducerService } from 'src/log-producer-kafka/log-producer.service';

@Injectable()
export class EmailConsumerService implements IEmailConsumerService {
  constructor(
    @Inject(LogProducerService)
    private readonly logProducerService: LogProducerService,
  ) {}

  async sendEmail(data: IEmailParams): Promise<void> {
    console.log(
      `Sending email to ${data.to} with subject ${data.subject} and text ${data.text}`,
    );

    //se quiser posso pegar enviar um producer para registro de log
    await this.logProducerService.sendLog({
      status: 'success',
      service: 'email',
      environment: 'production',
      data: JSON.stringify(data),
      timestamp: new Date().toISOString(),
    });
  }
}
