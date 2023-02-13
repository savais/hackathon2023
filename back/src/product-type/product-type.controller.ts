import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
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

    @Get(':id')
    async getProductTypeById(@Param() params): Promise<ProductType> {
        return await this.productTypeService.getProductTypeById(params.id)
    }

    @Patch(':id')
    async updateProductTypeById(@Param() params, @Body() updateProductType: UpdateProductTypeDto): Promise<ProductType> {
        return await this.productTypeService.updateProductTypeById(params.id, updateProductType)
    }

    @Delete(':id')
    async deleteProductById(@Param() params) {
        return await this.productTypeService.deleteProductTypeById(params.id)
    }
}
