import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypeModule } from 'src/product-type/product-type.module';
import { ProductTypeService } from 'src/product-type/product-type.service';
import { ProductFamily } from './entities/product-family.entity';
import { ProductFamilyController } from './product-families.controller';
import { ProductFamilyService } from './product-families.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductFamily])],
  controllers: [ProductFamilyController],
  providers: [ProductFamilyService],
  exports: [ProductFamilyService]
})
export class ProductFamilyModule {}
