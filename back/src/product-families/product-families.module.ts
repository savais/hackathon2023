import { Module } from '@nestjs/common';
import { ProductFamilyController } from './product-families.controller';
import { ProductFamilyService } from './product-families.service';

@Module({
  controllers: [ProductFamilyController],
  providers: [ProductFamilyService]
})
export class ProductFamilyModule {}
