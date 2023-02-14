import { ApiProperty } from "@nestjs/swagger";
import { Packet } from "src/packets/entities/packet.entity";
import { ProductFamily } from "src/product-families/entities/product-family.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductType {
    @ApiProperty({example: "1"})
    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1})
    id: number;

    @ApiProperty({example: "X5 Hitsausmasiinat"})
    @Column()
    @ApiProperty({example: "ABC"})
    name: string;

    @ApiProperty({example: "X5 tuoteperheen hitsarit"})
    @Column()
    @ApiProperty({example: "Best device in the world"})
    description: string;

    @ApiProperty({example: Packet, isArray: true})
    @OneToMany(() => Packet, (packet) => packet.productType)
    @ApiProperty({type: Packet, isArray: true})
    packets?: Packet[]

    @ApiProperty({example: ProductFamily})
    @ManyToOne(() => ProductFamily, (productFamily) => productFamily.productType)
    @ApiProperty({type: ProductFamily})
    productFamily: ProductFamily

}