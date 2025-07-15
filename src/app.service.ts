import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return `Hello World! Running in ${this.configService.get('NODE_ENV')} mode on port ${this.configService.get('PORT')}`;
  }
}
