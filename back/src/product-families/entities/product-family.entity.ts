import { ApiProperty } from "@nestjs/swagger";
import { ProductType } from "src/product-type/entities/product-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductFamily {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1})
    id: number;
    
    @Column()
    @ApiProperty({example: "DEF"})
    name: string;
    
    @Column()
    @ApiProperty({example: "Best class of devices in the world"})
    description: string;
    
    @ApiProperty({type: ProductType, isArray: true})
    @OneToMany(() => ProductType, (productType) => productType.productFamily)
    productType?: ProductType[]
}