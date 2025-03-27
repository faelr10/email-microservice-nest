import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailConsumerController } from './email-consumer.controller';
import { EmailConsumerService } from './email-consumer.service';
import { LogProducerService } from 'src/log-producer-kafka/log-producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAILS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'email_service',
            brokers: ['kafka:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [EmailConsumerController],
  providers: [EmailConsumerService, LogProducerService],
})
export class EmailConsumerModule {}
