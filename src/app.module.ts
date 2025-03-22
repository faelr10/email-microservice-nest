import { Module } from '@nestjs/common';
import { EmailConsumerModule } from './email-consumer-kafka/email-consumer.module';

@Module({
  imports: [EmailConsumerModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
