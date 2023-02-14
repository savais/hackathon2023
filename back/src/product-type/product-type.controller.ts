import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
import { ProductType } from './entities/product-type.entity';
import { ProductTypeService } from './product-type.service';

@Controller('product-types')
export class ProductTypeController {
    constructor(private productTypeService: ProductTypeService) {}

    @ApiOperation({ summary: "Get all product-types" })
    @ApiResponse({
        status: 200,
        description: 'Product-types fetched successfully',
        type: ProductType,
        isArray: true
      })
    @Get()
    async getAllProductTypes(): Promise<ProductType[]> {
        return await this.productTypeService.getAllProductTypes()
    }

    @ApiOperation({ summary: "Create a new product-type"})
    @ApiResponse({
        status: 201,
        description: 'New product-type created succesfully',
        type: ProductType,
      })
    @UseGuards(JwtAuthGuard)
    @Post()
    async postProductType(@Body() createProductTypeDto: CreateProductTypeDto): Promise<ProductType> {
        return await this.productTypeService.insertProductType(createProductTypeDto)
    }

    @ApiOperation({ summary: "Get a single product-type by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-type fetched succesfully',
        type: ProductType,
      })
    @Get(':id')
    async getProductTypeById(@Param() params): Promise<ProductType> {
        return await this.productTypeService.getProductTypeById(params.id)
    }

    @ApiOperation({ summary: "Update single product-type by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-type updated succesfully',
        type: ProductType,
      })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateProductTypeById(@Param() params, @Body() updateProductType: UpdateProductTypeDto): Promise<ProductType> {
        return await this.productTypeService.updateProductTypeById(params.id, updateProductType)
    }

    @ApiOperation({ summary: "Delete single product-type by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-type deleted succesfully'
      })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteProductById(@Param() params) {
        return await this.productTypeService.deleteProductTypeById(params.id)
    }
}
