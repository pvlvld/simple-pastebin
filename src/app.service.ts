import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { IAppConfig } from './config/config.module';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<IAppConfig, true>) {}
  getHello(): string {
    const test = this.configService.get('NODE_ENV', { infer: true });
    return `Hello World! Running in ${this.configService.get<{ NODE_ENV: string }>('NODE_ENV')} mode on port ${this.configService.get('PORT')}`;
  }
}
