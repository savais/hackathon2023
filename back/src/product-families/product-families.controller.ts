import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductFamilyDto } from './dto/create-product-family.dto';
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


}
