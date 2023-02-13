import { ProductType } from "src/product-type/entities/product-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductFamily {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => ProductType, (productType) => productType.productFamily)
    productType: ProductType[]
}