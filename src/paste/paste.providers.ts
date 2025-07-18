import { DataSource } from 'typeorm';
import { Paste } from './paste.entity';
import {
  PASTE_TYPEORM_REPOSITORY,
  TYPEORM_DATA_SOURCE,
} from 'src/common/consts';

export const pasteProviders = [
  {
    provide: PASTE_TYPEORM_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Paste),
    inject: [TYPEORM_DATA_SOURCE],
  },
];
