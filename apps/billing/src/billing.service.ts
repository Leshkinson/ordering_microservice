import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  bill(data: any) {
    console.log('data', data);
    this.logger.log('Billing...', data);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
