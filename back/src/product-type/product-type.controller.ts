import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { ProductType } from './entities/product-type.entity';
import { ProductTypeService } from './product-type.service';

@Controller('product-types')
export class ProductTypeController {
    constructor(private productTypeService: ProductTypeService) {}

    @Get()
    async getAllProductTypes(): Promise<ProductType[]> {
        return await this.productTypeService.getAllProductTypes()
    }

    @Post()
    async postProductType(@Body() createProductTypeDto: CreateProductTypeDto): Promise<ProductType> {
        return await this.productTypeService.insertProductType(createProductTypeDto)
    }
}
