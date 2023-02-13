import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductFamilyDto } from './dto/create-product-family.dto';
import { UpdateProductFamilyDto } from './dto/update-product-family.dto';
import { ProductFamily } from './entities/product-family.entity';
import { ProductFamilyService } from './product-families.service';

@Controller('product-families')
export class ProductFamilyController {
    constructor(private productFamilyService: ProductFamilyService) {}

    // TODO: Paging
    @Get()
    async getAllProductFamilies(): Promise<ProductFamily[]> {
        return await this.productFamilyService.getAllProductFamilies()
    }

    @Post()
    async postProductFamily(@Body() createProductFamilyDto: CreateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.insertProductFamily(createProductFamilyDto)
    }

    @Get(':id')
    async getProductFamilyById(@Param() params): Promise<ProductFamily> {
        return await this.productFamilyService.getProductFamilyById(params.id)
    }

    @Patch(':id')
    async updateProductFamilyById(@Param() params, @Body() updateProductFamily: UpdateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.updateProductFamilyById(params.id, updateProductFamily)
    }

    @Delete(':id')
    async deleteProductById(@Param() params) {
        return await this.productFamilyService.deleteProductFamilyById(params.id)
    }
}
