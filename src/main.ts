import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [String(process.env.KAFKA_BROKER)],
      },
      consumer: {
        groupId: String(process.env.KAFKA_CONSUMER_GROUP_ID),
      },
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
