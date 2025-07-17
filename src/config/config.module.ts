import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

export type IAppConfig = Readonly<{
  NODE_ENV: 'development' | 'production';
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
}>;

export const AppConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: Joi.object<IAppConfig>({
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
    PORT: Joi.number().port().default(3000),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().port().required(),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required(),
  }),
  validationOptions: {
    // allowUnknown: false,
    abortEarly: true,
    convert: true,
  },
});
