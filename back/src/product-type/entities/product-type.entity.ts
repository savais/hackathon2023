import { ApiProperty } from "@nestjs/swagger";
import { Packet } from "src/packets/entities/packet.entity";
import { ProductFamily } from "src/product-families/entities/product-family.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1})
    id: number;
    
    @Column()
    @ApiProperty({example: "ABC"})
    name: string;
    
    @Column()
    @ApiProperty({example: "Best device in the world"})
    description: string;
    
    @OneToMany(() => Packet, (packet) => packet.productType)
    @ApiProperty({type: Packet, isArray: true})
    packets?: Packet[]
    
    @ManyToOne(() => ProductFamily, (productFamily) => productFamily.productType)
    @ApiProperty({type: ProductFamily})
    productFamily: ProductFamily

}