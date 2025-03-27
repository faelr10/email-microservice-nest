import { Inject, Injectable } from '@nestjs/common';
import { ILogParams, ILogProducerService } from './structure';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LogProducerService implements ILogProducerService {
  constructor(
    @Inject('EMAILS_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async sendLog(data: ILogParams): Promise<void> {
    await lastValueFrom(this.kafkaClient.emit('logs', data));

    console.log(
      `Sending log to ${data.service} with status ${data.status} and data ${data.data}`,
    );
    return;
  }
}
