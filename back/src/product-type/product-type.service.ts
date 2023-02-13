import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductType } from './entities/product-type.entity';

@Injectable()
export class ProductTypeService {
    constructor(@InjectRepository(ProductType)
    private productTypesRepository: Repository<ProductType> ) {}

    async getProductTypeByName(name: string): Promise<ProductType> {
        return await this.productTypesRepository.findOne({where: {name: name}})
    }
}
