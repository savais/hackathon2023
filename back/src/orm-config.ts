import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class OrmConfig {
  public static config: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'db/database.db',
    entities: ['dist/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    // logging: ['error', 'info', 'log', 'migration', 'query', 'schema', 'warn']
  };
}
