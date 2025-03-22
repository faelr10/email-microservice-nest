// import { Inject, Injectable } from '@nestjs/common';
// import { ClientKafka } from '@nestjs/microservices';
// import { lastValueFrom } from 'rxjs';

// @Injectable()
// export class PaymentsService {
//   constructor(
//     @Inject('EMAILS_SERVICE')
//     private kafkaClient: ClientKafka,
//   ) {}

//   async sendEmail(data: any) {
//     await lastValueFrom(this.kafkaClient.emit('emails', data));
//     return 'sendEmail';
//   }
// }
