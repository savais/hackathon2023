import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductFamilyModule } from 'src/product-families/product-families.module';
import { ProductFamilyService } from 'src/product-families/product-families.service';
=======
>>>>>>> 3a911780995b8f137dc1e3c5b139e4d8fd1c334d
=======
>>>>>>> f4011fafddd27963d1625008a062bd688fdab74d
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
  imports: [TypeOrmModule.forFeature([ProductType])]
})
export class ProductTypeModule {}
