import { ApiProperty } from "@nestjs/swagger";
import { ProductType } from "src/product-type/entities/product-type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ProductFamily {

    @ApiProperty({example: 1})
    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1})
    id: number;
<<<<<<< HEAD

    @ApiProperty({example: "Personal Protection Equipment"})
=======
    
>>>>>>> e6eea9b1bd802adfedb25a338ae1610e3dc22c99
    @Column()
    @ApiProperty({example: "DEF"})
    name: string;
<<<<<<< HEAD

    @ApiProperty({example: "Suojausvälineet"})
=======
    
>>>>>>> e6eea9b1bd802adfedb25a338ae1610e3dc22c99
    @Column()
    @ApiProperty({example: "Best class of devices in the world"})
    description: string;
<<<<<<< HEAD

    @ApiProperty({example: ProductType, isArray: true})
=======
    
    @ApiProperty({type: ProductType, isArray: true})
>>>>>>> e6eea9b1bd802adfedb25a338ae1610e3dc22c99
    @OneToMany(() => ProductType, (productType) => productType.productFamily)
    productType?: ProductType[]
}