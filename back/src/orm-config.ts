import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductFamily } from './product-families/entities/product-family.entity';
import { ProductType } from './product-type/entities/product-type.entity';
import { User } from './users/entities/user.entity';

export class OrmConfig {
  public static config: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'db/database.db',
    entities: [User, ProductFamily, ProductType],
    //entities: ['dist/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: ['error', 'info', 'log', 'migration', 'query', 'schema', 'warn']
  };
}
