export interface IEmailConsumerService {
  sendEmail(data: IEmailParams): Promise<void>;
}

export type IEmailParams = {
  to: string;
  subject: string;
  text: string;
};
