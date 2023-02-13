import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './entities/product-type.entity';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

@Module({
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [ProductTypeService],
  imports: [TypeOrmModule.forFeature([ProductType])]
})
export class ProductTypeModule {}
