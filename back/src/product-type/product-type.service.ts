import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductFamilyService } from 'src/product-families/product-families.service';
import { Repository } from 'typeorm';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { ProductType } from './entities/product-type.entity';

@Injectable()
export class ProductTypeService {
    constructor(@InjectRepository(ProductType)
    private productTypesRepository: Repository<ProductType>,
    private productFamilyService: ProductFamilyService) {}

    async getProductTypeByName(name: string): Promise<ProductType> {
        return await this.productTypesRepository.findOne({where: {name: name}})
    }

    //TODO: Paging
    async getAllProductTypes(): Promise<ProductType[]> {
        return await this.productTypesRepository.find()
    }

    async insertProductType(createProductType: CreateProductTypeDto): Promise<ProductType> {
        const productType = new ProductType()
        productType.name = createProductType.name
        productType.description = createProductType.description
        productType.productFamily = await this.productFamilyService.getProductFamilyByName(createProductType.productFamily)

        return await this.productTypesRepository.save(productType)
    }

    async getProductTypeById(id: number):Promise<ProductType> {
        return await this.productTypesRepository.findOne({where: {id: id}, relations: ['productFamily', 'packets']})
    }
}
