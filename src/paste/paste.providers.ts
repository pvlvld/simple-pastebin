import { DataSource } from 'typeorm';
import { Paste } from './paste.entity';

export const pasteProviders = [
  {
    provide: 'PASTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Paste),
    inject: ['DATA_SOURCE'],
  },
];
