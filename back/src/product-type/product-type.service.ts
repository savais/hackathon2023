import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductFamilyService } from 'src/product-families/product-families.service';
import { Repository } from 'typeorm';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
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
        return await this.productTypesRepository.find({relations: {productFamily: true, packets: true}})
    }

    async insertProductType(createProductType: CreateProductTypeDto): Promise<ProductType> {
        const productType = new ProductType()
        productType.name = createProductType.name
        productType.description = createProductType.description
        productType.productFamily = await this.productFamilyService.getProductFamilyByName(createProductType.productFamily)

        return await this.productTypesRepository.save(productType)
    }

    async getProductTypeById(id: number):Promise<ProductType> {
        return await this.productTypesRepository.findOne({where: {id: id}, relations: {productFamily: true, packets: true}})
    }

    async updateProductTypeById(id: number, updateProductTypeDto: UpdateProductTypeDto): Promise<ProductType> {
        const productTypeToBeUpdated = await this.productTypesRepository.findOne({where:{id:id}})
        if (productTypeToBeUpdated === null) {
            throw(NotFoundException)
        }



        for(const prop in productTypeToBeUpdated) {
            if(prop in updateProductTypeDto) {
                if(prop == 'productFamily'){
                    if(updateProductTypeDto.productFamily != undefined) {
                        const productFamily = await this.productFamilyService.getProductFamilyByName(updateProductTypeDto.productFamily)
                        productTypeToBeUpdated.productFamily = productFamily;
                    }
                } else {
                    productTypeToBeUpdated[prop] = updateProductTypeDto[prop]
                }
            }
        }

     

        await this.productTypesRepository.update(id, {...productTypeToBeUpdated})

        return await this.productTypesRepository.findOne({where:{id:id}})
    }

    async deleteProductTypeById(id: number) {
        const productType = await this.productTypesRepository.findOne({where:{id:id}})

        await this.productTypesRepository.remove(productType)
    }
}
