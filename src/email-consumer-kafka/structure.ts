export interface IEmailConsumerService {
  sendEmail(data: IEmailParams): void;
}

export type IEmailParams = {
  to: string;
  subject: string;
  text: string;
};
