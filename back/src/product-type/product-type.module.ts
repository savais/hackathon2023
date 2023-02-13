import { Module } from '@nestjs/common';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

@Module({
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [ProductTypeService]
})
export class ProductTypeModule {}
