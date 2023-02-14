import { Length } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsObject } from "class-validator";
import { ProductFamily } from "src/product-families/entities/product-family.entity";
import { ProductType } from "src/product-type/entities/product-type.entity";

export class CreatePacketDto {

    @ApiProperty({example: "Kempact"})
    @IsString()
    @Length(4, 64)
    name: string;
    
    @ApiProperty({example: "Update date: 25.1.2023"})
    @IsString()
    @Length(0, 512)
    description: string;

    @ApiProperty({example: "1.0.2"})
    @IsString()
    @Length(1, 32)
    version: string;
    
    @ApiProperty({example: ""})
    @IsString()
    type: string;

    @ApiProperty()
    packet: Express.Multer.File;
}