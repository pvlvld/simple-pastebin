import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { TYPEORM_DATA_SOURCE } from 'src/common/consts';
import { IAppConfig } from 'src/config/config.module';

export const databaseProviders = [
  {
    provide: TYPEORM_DATA_SOURCE,
    useFactory: async (configService: ConfigService<IAppConfig, true>) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
