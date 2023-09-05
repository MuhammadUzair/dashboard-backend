import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const ORM_MODULE_CONFIG: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mongodb',
  migrationsRun: true,
  url: process.env.DATBASE_URL,
  synchronize: true, // set false for production
  logging: process.env.NODE_ENV === 'development',
  entities: [`dist/entities/*.{ts,js}`],
};
