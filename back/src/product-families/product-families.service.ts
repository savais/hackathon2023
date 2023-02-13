import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductFamilyDto } from './dto/create-product-family.dto';
import { ProductFamily } from './entities/product-family.entity';

@Injectable()
export class ProductFamilyService {
    constructor(@InjectRepository(ProductFamily)
        private ProductFamiliesRepository: Repository<ProductFamily>) {}

    async getProductFamilyByName(name: string):Promise<ProductFamily> {
        return await this.ProductFamiliesRepository.findOne({where: {name: name}})
    }

    async getAllProductFamilies():Promise<ProductFamily[]> {
        return await this.ProductFamiliesRepository.find()
    }

    async insertProductFamily(createProductFamily: CreateProductFamilyDto) {
        const productFamily = new ProductFamily()

        productFamily.name = createProductFamily.name
        productFamily.description = createProductFamily.description

        return await this.ProductFamiliesRepository.save(productFamily)
    }
}
