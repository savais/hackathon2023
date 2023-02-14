import { ApiProperty } from "@nestjs/swagger";
import { Packet } from "src/packets/entities/packet.entity";
import { ProductFamily } from "src/product-families/entities/product-family.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductType {
    @ApiProperty({example: "1"})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "X5 Hitsausmasiinat"})
    @Column()
    name: string;

    @ApiProperty({example: "X5 tuoteperheen hitsarit"})
    @Column()
    description: string;

    @ApiProperty({example: Packet, isArray: true})
    @OneToMany(() => Packet, (packet) => packet.productType)
    packets?: Packet[]

    @ApiProperty({example: ProductFamily})
    @ManyToOne(() => ProductFamily, (productFamily) => productFamily.productType)
    productFamily: ProductFamily

}