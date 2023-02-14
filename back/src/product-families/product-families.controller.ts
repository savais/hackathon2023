import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
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
    @ApiResponse({
        status: 200,
        description: 'Product-Families fetched successfully',
        type: ProductFamily,
        isArray: true
      })
    @Get()
    async getAllProductFamilies(): Promise<ProductFamily[]> {
        return await this.productFamilyService.getAllProductFamilies()
    }

    @ApiOperation({summary: "Create new product-family"})
    @ApiResponse({
        status: 201,
        description: 'Product-Family created successfully',
        type: ProductFamily
      })
    @ApiBody({type: CreateProductFamilyDto})
    @UseGuards(JwtAuthGuard)
    @Post()
    async postProductFamily(@Body() createProductFamilyDto: CreateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.insertProductFamily(createProductFamilyDto)
    }

    @ApiOperation({summary: "Get single product-family by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-Family fetched successfully',
        type: ProductFamily
      })
    @ApiParam({
    name: 'id',
    description: 'The id of the product-family to retrieve',
    type: 'number',
    })
    @Get(':id')
    async getProductFamilyById(@Param() params): Promise<ProductFamily> {
        return await this.productFamilyService.getProductFamilyById(params.id)
    }

    @ApiOperation({summary: "Update single product-family by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-Family updated successfully',
        type: ProductFamily
      })
    @ApiBody({type: UpdateProductFamilyDto})
    @ApiParam({
        name: 'id',
        description: 'The id of the product-family to update',
        type: 'number',
        })
    @ApiBody({type: UpdateProductFamilyDto})
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateProductFamilyById(@Param() params, @Body() updateProductFamily: UpdateProductFamilyDto): Promise<ProductFamily> {
        return await this.productFamilyService.updateProductFamilyById(params.id, updateProductFamily)
    }

    @ApiOperation({summary: "Delete single product-family by id"})
    @ApiResponse({
        status: 200,
        description: 'Product-Family deleted successfully'
      })
    @ApiParam({
    name: 'id',
    description: 'The id of the product-family to delete',
    type: 'number',
    })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteProductById(@Param() params) {
        return await this.productFamilyService.deleteProductFamilyById(params.id)
    }
}
