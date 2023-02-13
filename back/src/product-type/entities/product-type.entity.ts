import { Packet } from "src/packets/entities/packet.entity";
import { ProductFamily } from "src/product-families/entities/product-family.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Packet, (packet) => packet.productType)
    packets?: Packet[]

    @ManyToOne(() => ProductFamily, (productFamily) => productFamily.productType)
    productFamily: ProductFamily

}