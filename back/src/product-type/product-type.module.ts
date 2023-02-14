import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductFamilyModule } from 'src/product-families/product-families.module';
import { ProductType } from './entities/product-type.entity';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType]),
    ProductFamilyModule
  ],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
