import { ProductType } from "src/product-type/entities/product-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Packet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    version: string;

    @ManyToOne(() => ProductType, (productType) => productType.packets)
    productType: ProductType

    @Column()
    path: string;

    @Column()
    type: string;
}