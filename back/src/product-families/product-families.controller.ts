import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductFamilyDto } from './dto/create-product-family.dto';
import { UpdateProductFamilyDto } from './dto/update-product-family.dto';
import { ProductFamily } from './entities/product-family.entity';
import { ProductFamilyService } from './product-families.service';

@Controller('product-families')
export class ProductFamilyController {
    constructor(private productFamilyService: ProductFamilyService) {}

    // TODO: Paging
    @ApiOperation({summary: "Get all Product-families"})
    @Get()
    async getAllProductFamilies(): Promise<ProductFamily[]> {
        return await this.productFamilyService.getAllProductFamilies()
    }

    @ApiOperation({summary: "Create new product-family"})
    @UseGuards(JwtAuthGuard)
    @Post()
    async postProductFamily(@Body() createProductFamilyDto: CreateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.insertProductFamily(createProductFamilyDto)
    }

    @ApiOperation({summary: "Get single product-family by id"})
    @Get(':id')
    async getProductFamilyById(@Param() params): Promise<ProductFamily> {
        return await this.productFamilyService.getProductFamilyById(params.id)
    }

    @ApiOperation({summary: "Update single product-family by id"})
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateProductFamilyById(@Param() params, @Body() updateProductFamily: UpdateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.updateProductFamilyById(params.id, updateProductFamily)
    }

    @ApiOperation({summary: "Delete single product-family by id"})
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteProductById(@Param() params) {
        return await this.productFamilyService.deleteProductFamilyById(params.id)
    }
}
