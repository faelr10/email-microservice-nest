import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailConsumerController } from './email-consumer.controller';
import { EmailConsumerService } from './email-consumer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: String(process.env.KAFKA_NAME_CLIENT),
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [String(process.env.KAFKA_BROKER)],
          },
        },
      },
    ]),
  ],
  controllers: [EmailConsumerController],
  providers: [EmailConsumerService],
})
export class EmailConsumerModule {}
