import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from 'orm-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacketsModule } from './packets/packets.module';
import { UsersModule } from './users/users.module';
import { ProductFamilyModule } from './product-families/product-families.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig.config),
    PacketsModule, 
    UsersModule, ProductFamilyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
