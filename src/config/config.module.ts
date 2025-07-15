import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

export type IAppConfig = Readonly<{
  NODE_ENV: 'development' | 'production';
  PORT: number;
}>;

export const AppConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: Joi.object<IAppConfig>({
    NODE_ENV: Joi.string()
      .valid('development', 'production')
      .default('development'),
    PORT: Joi.number().port().default(3000),
  }),
  validationOptions: {
    // allowUnknown: false,
    abortEarly: true,
    convert: true,
  },
});
