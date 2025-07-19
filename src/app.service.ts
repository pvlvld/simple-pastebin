import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { IAppConfig } from './config/config.module';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService<IAppConfig, true>) {}
}
