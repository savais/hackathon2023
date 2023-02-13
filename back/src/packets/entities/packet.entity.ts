import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductFamily } from "../../product-families/entities/product-family.entity";

export class Packet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    version: string;

    @ManyToOne(() => ProductFamily, (productFamily) => productFamily.packets)
    productFamily: ProductFamily

    @Column()
    path: string;

    @Column()
    type: string;
}