import { ApiProperty } from "@nestjs/swagger";
import { ProductType } from "src/product-type/entities/product-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductFamily {

    @ApiProperty({example: 1})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "Personal Protection Equipment"})
    @Column()
    name: string;

    @ApiProperty({example: "Suojausvälineet"})
    @Column()
    description: string;

    @ApiProperty({example: ProductType, isArray: true})
    @OneToMany(() => ProductType, (productType) => productType.productFamily)
    productType?: ProductType[]
}