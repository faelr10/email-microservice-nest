import { Module } from '@nestjs/common';
import { LogProducerService } from './log-producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  controllers: [],
  providers: [LogProducerService],
})
export class LogProducerModule {}
