export interface ILogProducerService {
  sendLog(data: ILogParams): Promise<void>;
}

export type ILogParams = {
  status: string;
  service: string;
  environment: string;
  data: string;
  timestamp: string;
};
